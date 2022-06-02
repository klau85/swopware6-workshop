<?php

namespace Memo\BlogPlugin\Page\BlogDetail;

use Shopware\Core\Framework\Struct\Struct;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Page\Page;
use Shopware\Storefront\Page\PageLoadedEvent;
use Symfony\Component\HttpFoundation\Request;

class BlogDetailPageLoadedEvent extends PageLoadedEvent
{
    /** @var BlogDetailPage */
    private $page;

    public function __construct(
        BlogDetailPage      $page,
        SalesChannelContext $salesChannelContext,
        Request             $request
    )
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
