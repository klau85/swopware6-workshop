import template from './memo-blog-detail.html.twig';
import errorConfig from './error-config.json';

const {Component, Mixin} = Shopware;
const {Criteria} = Shopware.Data;
const {mapPageErrors} = Shopware.Component.getComponentHelper();

Component.register('memo-blog-detail', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('notification'),
        Mixin.getByName('discard-detail-page-changes')('memo_blog')
    ],

    shortcuts: {
        'SYSTEMKEY+S': 'onSave',
        ESCAPE: 'onAbortButtonClick'
    },

    props: {
        blogId: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            blog: null,
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle(this.identifier)
        };
    },

    computed: {
        identifier() {
            return this.blog !== null ? this.blog.name : '';
        },

        blogRepository() {
            return this.repositoryFactory.create('memo_blog');
        },

        editMode: {
            get() {
                if (typeof this.$route.query.edit === 'boolean') {
                    return this.$route.query.edit;
                }

                return this.$route.query.edit === 'true';
            },
            set(editMode) {
                this.$router.push({
                    name: this.$route.name,
                    query: {
                        edit: editMode
                    }
                });
            }
        },

        defaultCriteria() {
            const criteria = new Criteria();
            return criteria;
        },

        generalRoute() {
            return {
                name: 'memo.blog.detail.base',
                params: {
                    id: this.blogId
                },
                query: {
                    edit: this.editMode
                }
            };
        },
        productRoute() {
            return {
                name: 'memo.blog.detail.product',
                params: {
                    id: this.blogId
                },
                query: {
                    edit: this.editMode
                }
            };
        },

        ...mapPageErrors(errorConfig)
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.isLoading = true;

            this.blogRepository.get(
                this.blogId,
                Shopware.Context.api,
                this.defaultCriteria
            ).then((blog) => {
                this.blog = blog;
                this.isLoading = false;
            });
        },

        saveFinish() {
            this.isSaveSuccessful = false;
            this.editMode = false;
        },

        onSave() {
            if (!this.editMode) {
                return false;
            }

            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.blogRepository.save(this.blog, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    this.createdComponent();
                })
                .catch((exception) => {
                    this.createNotificationError({
                        title: this.$tc('memo-blog.detail.titleSaveError'),
                        message: this.$tc('memo-blog.detail.messageSaveError')
                    });
                    this.isLoading = false;
                    throw exception;
                });
        },

        onAbortButtonClick() {
            this.discardChanges();
            this.editMode = false;
        },

        onActivateBlogEditMode() {
            this.editMode = true;
        },
    }
});
