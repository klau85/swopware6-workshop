import template from './memo-blog-detail-base.html.twig';

const { Component } = Shopware;

Component.register('memo-blog-detail-base', {
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
});
