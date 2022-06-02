import template from './memo-blog-list.html.twig';
import './memo-blog-list.scss';

const { Component, Mixin } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('memo-blog-list', {
    template,

    inject: [
        'repositoryFactory'
    ],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('listing'),
    ],

    data() {
        return {
            blogs: null,
            sortBy: 'name',
            sortDirection: 'DESC',
            isLoading: false,
            total: 0
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return [
                {
                    property: 'name',
                    dataIndex: 'name',
                    label: this.$t('memo-blog.list.column.name'),
                    routerLink: 'memo.blog.detail',
                    inlineEdit: 'string',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'date',
                    label: this.$t('memo-blog.list.column.date'),
                    allowResize: false
                },
                {
                    property: 'active',
                    label: this.$t('memo-blog.list.column.active'),
                    inlineEdit: true,
                    allowResize: true
                }
            ];
        },

        repository() {
            return this.repositoryFactory.create('memo_blog');
        },
    },

    methods: {
        getList() {
            this.isLoading = true;

            const criteria = new Criteria(this.page, this.limit);

            criteria.setTerm(this.term);
            criteria.addSorting(Criteria.sort(this.sortBy, this.sortDirection));

            return Promise.all([
                this.repository.search(criteria, Shopware.Context.api)
            ]).then((result) => {
                const blogs = result[0];

                this.total = blogs.total;
                this.blogs = blogs;

                this.isLoading = false;
                this.selection = {};
            }).catch(() => {
                this.isLoading = false;
            });
        },

        onInlineEditSave(promise, blog) {
            return promise.then(() => {
                this.createNotificationSuccess({
                    title: this.$t('memo-blogs.general.save.success.title'),
                    message: this.$t('memo-blogs.general.save.success.message', { name: blog.name })
                });
            }).catch(() => {
                this.getList();
                this.createNotificationError({
                    title: this.$t('memo-blogs.general.save.error.title'),
                    message: this.$t('memo-blogs.general.save.error.message')
                });
            });
        },

        onInlineEditCancel(blog) {
            blog.discardChanges();
        },

        updateTotal({ total }) {
            this.total = total;
        },
    },

    created() {
        this.getList();
    }
});
