import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImageColumnToCategories20260207 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table =
      (await queryRunner.getTable("categories_sql_model")) ||
      (await queryRunner.getTable("categories"));
    if (!table) return;
    const hasImage = table.columns.some((c) => c.name === "image");
    if (!hasImage) {
      await queryRunner.addColumn(
        table.name,
        new TableColumn({
          name: "image",
          type: "varchar",
          isNullable: true,
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table =
      (await queryRunner.getTable("categories_sql_model")) ||
      (await queryRunner.getTable("categories"));
    if (!table) return;
    const hasImage = table.columns.some((c) => c.name === "image");
    if (hasImage) {
      await queryRunner.dropColumn(table.name, "image");
    }
  }
}
