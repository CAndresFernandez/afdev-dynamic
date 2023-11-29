<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231124203447 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE experience ADD responsibilities JSON NOT NULL, DROP resp_a, DROP resp_b, DROP resp_c');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE experience ADD resp_a VARCHAR(255) NOT NULL, ADD resp_b LONGTEXT DEFAULT NULL, ADD resp_c LONGTEXT DEFAULT NULL, DROP responsibilities');
    }
}
