import {MigrationInterface, QueryRunner} from "typeorm";

export class NewMigration1573206819081 implements MigrationInterface {
    name = 'NewMigration1573206819081'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "contact_person" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "update_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "country" character varying, "city" character varying, "street_number" character varying, "street" character varying, "postal_code" integer, CONSTRAINT "PK_12d9c34f76290c4e2ad2aa5e33f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "base_rmsp" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "update_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "name" character varying(50) NOT NULL, "country" character varying(50), "city" character varying(50), "street_number" character varying(20), "street" character varying(200), "postal_code" integer, "comment" character varying(600) NOT NULL, CONSTRAINT "PK_256a537a2ff8759b498a4fc7280" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "supplier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "update_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "name" character varying(50) NOT NULL, "country" character varying(50), "city" character varying(50), "street_number" character varying(20), "street" character varying(200), "postal_code" integer, "comment" character varying(600) NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "producer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "create_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "update_date" TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP, "name" character varying(50) NOT NULL, "country" character varying(50), "city" character varying(50), "street_number" character varying(20), "street" character varying(200), "postal_code" integer, "comment" character varying(600) NOT NULL, CONSTRAINT "PK_4cfe496c2c70e4c9b9f444525a6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "base_rmsp_contact_list_contact_person" ("baseRmspId" uuid NOT NULL, "contactPersonId" uuid NOT NULL, CONSTRAINT "PK_cd3908942d16b614abf30491021" PRIMARY KEY ("baseRmspId", "contactPersonId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_311c6add74e67189f9e4037237" ON "base_rmsp_contact_list_contact_person" ("baseRmspId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9b9cefdeada0e669ec46788561" ON "base_rmsp_contact_list_contact_person" ("contactPersonId") `, undefined);
        await queryRunner.query(`CREATE TABLE "supplier_contact_list_contact_person" ("supplierId" uuid NOT NULL, "contactPersonId" uuid NOT NULL, CONSTRAINT "PK_3e501b7ee176e4d0cf4ea362162" PRIMARY KEY ("supplierId", "contactPersonId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_cdbb7543149fdc3e6911a5c11f" ON "supplier_contact_list_contact_person" ("supplierId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_d4005b29289a43472ef21d1f2a" ON "supplier_contact_list_contact_person" ("contactPersonId") `, undefined);
        await queryRunner.query(`CREATE TABLE "producer_contact_list_contact_person" ("producerId" uuid NOT NULL, "contactPersonId" uuid NOT NULL, CONSTRAINT "PK_6076a4e932ac22190ce6a37afdf" PRIMARY KEY ("producerId", "contactPersonId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_81bb06e8a4aa67fb02332455a8" ON "producer_contact_list_contact_person" ("producerId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_3a9adeccc86e95b9d414b9546a" ON "producer_contact_list_contact_person" ("contactPersonId") `, undefined);
        await queryRunner.query(`ALTER TABLE "base_rmsp_contact_list_contact_person" ADD CONSTRAINT "FK_311c6add74e67189f9e4037237a" FOREIGN KEY ("baseRmspId") REFERENCES "base_rmsp"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "base_rmsp_contact_list_contact_person" ADD CONSTRAINT "FK_9b9cefdeada0e669ec467885616" FOREIGN KEY ("contactPersonId") REFERENCES "contact_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "supplier_contact_list_contact_person" ADD CONSTRAINT "FK_cdbb7543149fdc3e6911a5c11fd" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "supplier_contact_list_contact_person" ADD CONSTRAINT "FK_d4005b29289a43472ef21d1f2a1" FOREIGN KEY ("contactPersonId") REFERENCES "contact_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "producer_contact_list_contact_person" ADD CONSTRAINT "FK_81bb06e8a4aa67fb02332455a80" FOREIGN KEY ("producerId") REFERENCES "producer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "producer_contact_list_contact_person" ADD CONSTRAINT "FK_3a9adeccc86e95b9d414b9546a2" FOREIGN KEY ("contactPersonId") REFERENCES "contact_person"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "producer_contact_list_contact_person" DROP CONSTRAINT "FK_3a9adeccc86e95b9d414b9546a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "producer_contact_list_contact_person" DROP CONSTRAINT "FK_81bb06e8a4aa67fb02332455a80"`, undefined);
        await queryRunner.query(`ALTER TABLE "supplier_contact_list_contact_person" DROP CONSTRAINT "FK_d4005b29289a43472ef21d1f2a1"`, undefined);
        await queryRunner.query(`ALTER TABLE "supplier_contact_list_contact_person" DROP CONSTRAINT "FK_cdbb7543149fdc3e6911a5c11fd"`, undefined);
        await queryRunner.query(`ALTER TABLE "base_rmsp_contact_list_contact_person" DROP CONSTRAINT "FK_9b9cefdeada0e669ec467885616"`, undefined);
        await queryRunner.query(`ALTER TABLE "base_rmsp_contact_list_contact_person" DROP CONSTRAINT "FK_311c6add74e67189f9e4037237a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_3a9adeccc86e95b9d414b9546a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_81bb06e8a4aa67fb02332455a8"`, undefined);
        await queryRunner.query(`DROP TABLE "producer_contact_list_contact_person"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d4005b29289a43472ef21d1f2a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_cdbb7543149fdc3e6911a5c11f"`, undefined);
        await queryRunner.query(`DROP TABLE "supplier_contact_list_contact_person"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9b9cefdeada0e669ec46788561"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_311c6add74e67189f9e4037237"`, undefined);
        await queryRunner.query(`DROP TABLE "base_rmsp_contact_list_contact_person"`, undefined);
        await queryRunner.query(`DROP TABLE "producer"`, undefined);
        await queryRunner.query(`DROP TABLE "supplier"`, undefined);
        await queryRunner.query(`DROP TABLE "base_rmsp"`, undefined);
        await queryRunner.query(`DROP TABLE "contact_person"`, undefined);
    }

}
