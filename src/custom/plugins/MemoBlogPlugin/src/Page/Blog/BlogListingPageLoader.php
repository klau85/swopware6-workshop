<?php

namespace Memo\BlogPlugin\Page\Blog;

use Memo\BlogPlugin\Core\Content\Blog\BlogCollection;
use Psr\EventDispatcher\EventDispatcherInterface;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Sorting\FieldSorting;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Page\GenericPageLoaderInterface;
use Symfony\Component\HttpFoundation\Request;

class BlogListingPageLoader
{
    /** @var GenericPageLoaderInterface */
    private $genericPageLoader;

    /** @var EventDispatcherInterface */
    private $eventDispatcher;

    /** @var EntityRepositoryInterface */
    private $blogRepository;

    /**
     * @param GenericPageLoaderInterface $genericPageLoader
     * @param EventDispatcherInterface $eventDispatcher
     * @param EntityRepositoryInterface $blogRepository
     */
    public function __construct(GenericPageLoaderInterface $genericPageLoader,
                                EventDispatcherInterface $eventDispatcher,
                                EntityRepositoryInterface $blogRepository)
    {
        $this->genericPageLoader = $genericPageLoader;
        $this->eventDispatcher = $eventDispatcher;
        $this->blogRepository = $blogRepository;
    }

    public function load(Request $request,
                        SalesChannelContext $salesChannelContext): BlogListingPage
    {
        $page = $this->genericPageLoader->load($request, $salesChannelContext);

        /** @var BlogListingPage $page */
        $page = BlogListingPage::createFrom($page);

        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('active', true));
        $criteria->addSorting(new FieldSorting('date', FieldSorting::DESCENDING));

        /** @var BlogCollection $blogs */
        $blogs = $this->blogRepository->search($criteria, $salesChannelContext->getContext())->getEntities();

        $page->setBlogs($blogs);

        $this->eventDispatcher->dispatch(new BlogListingPageLoadedEvent($page, $salesChannelContext, $request));

        return $page;
    }
}