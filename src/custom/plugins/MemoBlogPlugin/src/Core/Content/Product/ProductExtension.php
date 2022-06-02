<?php

namespace Memo\BlogPlugin\Core\Content\Product;

use Memo\BlogPlugin\Core\Content\Blog\BlogDefinition;
use Memo\BlogPlugin\Core\Content\Blog\BlogProductMappingDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ProductExtension extends EntityExtension
{

    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            new ManyToManyAssociationField(
                'blogs',
                BlogDefinition::class,
                BlogProductMappingDefinition::class,
                'product_id',
                'blog_id'
            )
        );
    }

    /**
     * @inheritDoc
     */
    public function getDefinitionClass(): string
    {
        return ProductDefinition::class;
    }
}
