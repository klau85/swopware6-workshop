<?php

namespace Memo\BlogPlugin\Controller\Storefront;

use Memo\BlogPlugin\Page\Blog\BlogListingPageLoader;
use Memo\BlogPlugin\Page\BlogDetail\BlogDetailPageLoader;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @RouteScope(scopes={"storefront"})
 */
class BlogController extends StorefrontController
{

    /** @var BlogListingPageLoader */
    private $blogListingPageLoader;

    /** @var BlogDetailPageLoader */
    private $blogDetailPageLoader;


    /**
     * @param BlogListingPageLoader $blogListingPageLoader
     */
    public function __construct(
        BlogListingPageLoader $blogListingPageLoader,
        BlogDetailPageLoader $blogDetailPageLoader
    )
    {
        $this->blogListingPageLoader = $blogListingPageLoader;
        $this->blogDetailPageLoader = $blogDetailPageLoader;
    }

    /**
     * @Route("/blogs", name="storefront.memo_blog.blogs")
     */
    public function index(
        Request $request,
        SalesChannelContext $salesChannelContext
    ): Response
    {
        $page = $this->blogListingPageLoader->load($request, $salesChannelContext);

        return $this->renderStorefront("@MemoBlogPlugin/storefront/page/blog/index.html.twig",[
            'page' => $page
        ]);
    }

    /**
     * @Route("/blogs/{blogId}", name="storefront.memo_blog.blogs.detail")
     */
    public function detail(
        string $blogId,
        Request $request,
        SalesChannelContext $salesChannelContext
    ): Response
    {
        $page = $this->blogDetailPageLoader->load($blogId, $request, $salesChannelContext);

        return $this->renderStorefront("@MemoBlogPlugin/storefront/page/blog/detail.html.twig", [
            'page' => $page
        ]);
    }
}