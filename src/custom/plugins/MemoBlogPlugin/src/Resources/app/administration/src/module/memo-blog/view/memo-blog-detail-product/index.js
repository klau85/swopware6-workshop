import template from './memo-blog-detail-product.html.twig';

const { Component } = Shopware;

Component.register('memo-blog-detail-product', {
    template,

    inject: ['repositoryFactory'],

    props: {
        blog: {
            type: Object,
            required: true
        },

        blogEditMode: {
            type: Boolean,
            required: true,
            default: false
        },

        isLoading: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    computed: {
        productColumns() {
            return [
                {
                    property: 'name',
                    label: "NAME"
                },
                {
                    property: 'productNumber',
                    label: "Number"
                }
            ]
        }
    }
});
