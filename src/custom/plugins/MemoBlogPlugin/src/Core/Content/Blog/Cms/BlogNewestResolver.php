<?php declare(strict_types=1);

namespace Memo\BlogPlugin\Core\Content\Blog\Cms;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;

class BlogNewestResolver extends AbstractCmsElementResolver
{
    /** @var EntityRepositoryInterface */
    private $blogRepository;

    /**
     * @param EntityRepositoryInterface $blogRepository
     */
    public function __construct(EntityRepositoryInterface $blogRepository)
    {
        $this->blogRepository = $blogRepository;
    }

    public function getType(): string
    {
        return 'memo-blog-newest-element';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return null;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $blogId = $slot->getFieldConfig()->get('blog')->getValue();

        $criteria = new Criteria([$blogId]);
        $criteria->addAssociation('products');

        $slot->setData(
            $this->blogRepository->search(
                $criteria, Context::createDefaultContext()
            )->first()
        );
    }

}
