import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1717102741589 implements MigrationInterface {
    name = 'Default1717102741589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`providerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`provider\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_39c1a7b4cdd7cfb27b9ee9e500\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_f70b268affe05f6e9df0dab57b0\` FOREIGN KEY (\`providerId\`) REFERENCES \`provider\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_f70b268affe05f6e9df0dab57b0\``);
        await queryRunner.query(`DROP INDEX \`IDX_39c1a7b4cdd7cfb27b9ee9e500\` ON \`provider\``);
        await queryRunner.query(`DROP TABLE \`provider\``);
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
