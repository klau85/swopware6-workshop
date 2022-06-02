import template from './sw-cms-el-memo-blog-newest.html.twig'

const { Component } = Shopware;

Component.register('sw-cms-el-memo-newest-blog', {
    template,

    mixins: [
        'placeholder',
        'cms-element'
    ],

    computed: {
        blog() {
            if (!this.element.data || !this.element.data.blog) {
                return {
                    name: 'Lorem ipsum ...'
                }
            }

            return this.element.data.blog;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('memo-blog-newest-element');
            this.initElementData('memo-blog-newest-element');
        }
    }
})