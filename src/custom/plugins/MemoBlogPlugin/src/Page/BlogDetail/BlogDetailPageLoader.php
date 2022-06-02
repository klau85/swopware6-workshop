<?php

namespace Memo\BlogPlugin\Page\BlogDetail;

use Memo\BlogPlugin\Core\Content\Blog\BlogCollection;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Sorting\FieldSorting;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Page\GenericPageLoaderInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;

class BlogDetailPageLoader
{
    /**
     * @var GenericPageLoaderInterface
     */
    private $genericLoader;

    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher;

    /**
     * @var EntityRepositoryInterface
     */
    private $blogRepository;

    public function __construct(
        GenericPageLoaderInterface $genericLoader,
        EventDispatcherInterface $eventDispatcher,
        EntityRepositoryInterface $blogRepository
    )
    {
        $this->blogRepository = $blogRepository;
        $this->eventDispatcher = $eventDispatcher;
        $this->genericLoader = $genericLoader;
    }

    public function load(
        string $id,
        Request $request,
        SalesChannelContext $salesChannelContext
    ): BlogDetailPage
    {
        $page = $this->genericLoader->load($request, $salesChannelContext);

        /** @var BlogDetailPage $page */
        $page = BlogDetailPage::createFrom($page);

        $criteria = new Criteria([$id]);


        //$criteria->addFilter(new EqualsFilter('id', $id));
        $criteria->addFilter(new EqualsFilter('active', true));
        $criteria->addSorting(new FieldSorting('date', FieldSorting::DESCENDING));
        $criteria->addAssociation('products');

        /** @var BlogCollection $blogs */
        $blog = $this->blogRepository->search($criteria, $salesChannelContext->getContext())->first();

        $page->setBlog($blog);

        $this->eventDispatcher->dispatch(
            new BlogDetailPageLoadedEvent($page, $salesChannelContext, $request)
        );

        return $page;
    }
}
