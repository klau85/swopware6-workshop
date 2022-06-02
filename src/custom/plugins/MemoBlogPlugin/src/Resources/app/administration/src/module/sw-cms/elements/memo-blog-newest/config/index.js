import template from './sw-cms-el-memo-blog-newest.html.twig'

const { Component, Mixin } = Shopware
const { Criteria } = Shopware.Data;

Component.register('sw-cms-el-config-memo-newest-blog', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    inject: ['repositoryFactory'],

    computed: {
        blogRepository() {
            return this.repositoryFactory.create('memo_blog');
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('memo-blog-newest-element');
        },
        onBlogChange(blogId) {
            if (!blogId) {
                this.element.config.blog.value = null;
                this.$set(this.element.data, 'blogId', null);
                this.$set(this.element.data, 'blog', null);
            } else {
                const criteria = new Criteria();

                this.blogRepository.get(blogId, Shopware.Context.api, criteria).then((blog) => {
                    this.element.config.blog.value = blogId;
                    this.$set(this.element.data, 'blogId', blogId);
                    this.$set(this.element.data, 'blog', blog);
                })
            }

            this.$emit('element-update', this.element);
        }
    }
})