<?php

namespace Memo\BlogPlugin\Core\Content\Blog;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ReferenceVersionField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\MappingEntityDefinition;

class BlogProductMappingDefinition extends MappingEntityDefinition
{
    public const ENTITY_NAME = 'memo_blog_product';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new FkField('blog_id', 'blogId', BlogDefinition::class))
                ->addFlags(new PrimaryKey(), new Required()),

            (new FkField('product_id', 'productId', ProductDefinition::class))
                ->addFlags(new PrimaryKey(), new Required()),

            (new ReferenceVersionField(ProductDefinition::class))
                ->addFlags(new PrimaryKey(), new Required()),

            new ManyToOneAssociationField('blog', 'blog_id', BlogDefinition::class),

            new ManyToOneAssociationField('product', 'product_id', ProductDefinition::class),
        ]);
    }
}
