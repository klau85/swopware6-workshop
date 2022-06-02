<?php declare(strict_types=1);

namespace Memo\BlogPlugin\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1653909019 extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1653909019;
    }

    public function update(Connection $connection): void
    {
        $sql = "CREATE TABLE IF NOT EXISTS `memo_blog_product` (
                `blog_id` BINARY(16) NOT NULL,
                `product_id` BINARY(16) NOT NULL,
                `product_version_id` BINARY(16) NOT NULL,

                PRIMARY KEY (`blog_id`, `product_id`, `product_version_id`),

                  CONSTRAINT `fk.memo_blog_product.blog_id` FOREIGN KEY (`blog_id`)
                      REFERENCES `memo_blog` (`id`) ON DELETE CASCADE,
                  CONSTRAINT `fk.memo_blog_product.product_id` FOREIGN KEY (`product_id`, `product_version_id`)
                      REFERENCES `product` (`id`, `version_id`) ON DELETE CASCADE

                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
