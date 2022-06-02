import template from './memo-blog-create.html.twig';

const { Component, Mixin } = Shopware;

Component.register('memo-blog-create', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('placeholder'),
    ],

    data() {
        return {
            blog: null,
            isSaveSuccessful: false,
            isLoading: false
        };
    },

    computed: {
        blogRepository() {
            return this.repositoryFactory.create('memo_blog');
        },

    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.blog = this.blogRepository.create(Shopware.Context.api);
        },

        blogTitle() {
            return this.placeholder(this.blog, 'name', this.$t('memo-blog.title')); // "New blog"
        },

        saveFinish() {
            this.isSaveSuccessful = false;
            this.$router.push({ name: 'memo.blog.detail', params: { id: this.blog.id }, query: { edit: false } });
        },

        onSave() {
            this.isLoading = true;
            this.isSaveSuccessful = false;

            this.blogRepository.save(this.blog, Shopware.Context.api).then(() => {
                this.createNotificationSuccess({
                    title: this.$t('memo-blog.general.save.success.title'),
                    message: this.$tc('memo-blog.general.save.success.message', 0, { name: this.blog.name })
                });
                this.isLoading = false;
                this.isSaveSuccessful = true;
            }).catch(() => {
                this.createNotificationError({
                    title: this.$t('memo-blog.general.save.error.title'),
                    message: this.$t('memo-blog.general.save.error.message')
                });
                this.isLoading = false;
            });
        }
    }
});
