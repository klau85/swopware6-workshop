<?php

namespace Memo\BlogPlugin\Page\Blog;

use Memo\BlogPlugin\Core\Content\Blog\BlogCollection;
use Shopware\Storefront\Page\Page;

class BlogListingPage extends Page
{
    /** @var BlogCollection */
    private $blogs;

    /**
     * @return BlogCollection
     */
    public function getBlogs(): BlogCollection
    {
        return $this->blogs;
    }

    /**
     * @param BlogCollection $blogs
     */
    public function setBlogs(BlogCollection $blogs): void
    {
        $this->blogs = $blogs;
    }
}