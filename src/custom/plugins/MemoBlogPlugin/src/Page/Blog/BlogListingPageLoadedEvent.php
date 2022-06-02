<?php

namespace Memo\BlogPlugin\Page\Blog;

use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Page\PageLoadedEvent;
use Symfony\Component\HttpFoundation\Request;

class BlogListingPageLoadedEvent extends PageLoadedEvent
{
    /** @var BlogListingPage */
    private $page;

    public function __construct(
        BlogListingPage $page,
        SalesChannelContext   $salesChannelContext,
        Request               $request)
    {
        $this->page = $page;
        parent::__construct($salesChannelContext, $request);
    }

    /**
     * @inheritDoc
     */
    public function getPage()
    {
        return $this->page;
    }

}