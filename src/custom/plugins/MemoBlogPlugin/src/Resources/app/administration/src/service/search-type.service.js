Shopware.Application.addServiceProviderDecorator('searchTypeService', searchTypeService => {
    searchTypeService.upsertType('memo_blog', {
        entityName: 'memo_blog',
        entityService: 'memoBlogService',
        listingRoute: 'memo.blog.index',
        placeholderSnippet: 'memo-blog.general.searchBar.placeholder',
    });

    return searchTypeService;
});
