import './page/memo-blog-list';
import './page/memo-blog-create';
import './page/memo-blog-detail';
import './view/memo-blog-detail-base';
import './view/memo-blog-detail-product';

import enGB from './snippet/en-GB.json';
import deDE from './snippet/de-DE.json';

Shopware.Module.register('memo-blog', {
    type: 'plugin',
    name: 'blogs',
    title: 'memo-blog.general.title',
    description: 'memo-blog.general.description',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#009fe3',
    icon: 'default-action-settings',
    entity: 'memo_blog',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },
    routes: {
        index: {
            components: {
                default: 'memo-blog-list'
            },
            path: 'index'
        },
        create: {
            components: {
                default: 'memo-blog-create'
            },
            path: 'create',
            meta: {
                parentPath: 'memo.blog.index'
            }
        },
        detail: {
            components: {
                default: 'memo-blog-detail'
            },
            path: 'detail/:id',
            redirect: {
                name: 'memo.blog.detail.base'
            },
            children: {
                base: {
                    component: 'memo-blog-detail-base',
                    path: 'base',
                    meta: {
                        parentPath: 'memo.blog.index'
                    }
                },
                product: {
                    component: 'memo-blog-detail-product',
                    path: 'product',
                    meta: {
                        parentPath: 'memo.blog.index'
                    }
                }
            },
            props: {
                default(route) {
                    return {
                        blogId: route.params.id
                    };
                }
            }
        },
    },

    navigation: [
        {
            id: 'memo-blog.index',
            parent: 'sw-content',
            label: 'memo-blog.menu.index',
            color: '#009fe3',
            path: 'memo.blog.index',
            position: 10,
        }
    ]
})
