<?php

namespace Memo\BlogPlugin\Page\BlogDetail;

use Memo\BlogPlugin\Core\Content\Blog\BlogCollection;
use Memo\BlogPlugin\Core\Content\Blog\BlogEntity;
use Shopware\Storefront\Page\Page;

class BlogDetailPage extends Page
{
    /** @var BlogEntity */
    private $blog;

    /**
     * @return BlogEntity
     */
    public function getBlog(): BlogEntity
    {
        return $this->blog;
    }

    /**
     * @param BlogEntity $blog
     */
    public function setBlog(BlogEntity $blog): void
    {
        $this->blog = $blog;
    }
}
