import './preview';
import './component';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'memo-blog-newest-element',
    label: 'Newest Blog',
    component: 'sw-cms-el-memo-newest-blog',
    configComponent: 'sw-cms-el-config-memo-newest-blog',
    previewComponent: 'sw-cms-el-preview-memo-newest-blog',
    defaultConfig: {
        blog: {
            source: 'static',
            value: null,
            entity: {
                name: 'memo_blog'
            }
        }
    },
    defaultData: {
        blog: {
            name: 'Blog Name Default Placeholder'
        }
    }
});