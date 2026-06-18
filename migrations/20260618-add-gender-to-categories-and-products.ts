import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
import { GenderEnum } from "@app/enum";

export class AddGenderToCategoriesAndProducts1750252800000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Update categories table
    const categoriesTable =
      (await queryRunner.getTable("categories_sql_model")) ||
      (await queryRunner.getTable("categories"));
    if (categoriesTable) {
      const hasGender = categoriesTable.columns.some((c) => c.name === "gender");
      if (!hasGender) {
        await queryRunner.addColumn(
          categoriesTable.name,
          new TableColumn({
            name: "gender",
            type: "enum",
            enum: Object.values(GenderEnum),
            default: `'${GenderEnum.UNISEX}'`,
            isNullable: true,
          })
        );
      }
    }

    // Update products table
    const productsTable = await queryRunner.getTable("products");
    if (productsTable) {
      const hasGender = productsTable.columns.some((c) => c.name === "gender");
      if (!hasGender) {
        await queryRunner.addColumn(
          productsTable.name,
          new TableColumn({
            name: "gender",
            type: "enum",
            enum: Object.values(GenderEnum),
            default: `'${GenderEnum.UNISEX}'`,
            isNullable: true,
          })
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop gender from categories
    const categoriesTable =
      (await queryRunner.getTable("categories_sql_model")) ||
      (await queryRunner.getTable("categories"));
    if (categoriesTable) {
      const hasGender = categoriesTable.columns.some((c) => c.name === "gender");
      if (hasGender) {
        await queryRunner.dropColumn(categoriesTable.name, "gender");
      }
    }

    // Drop gender from products
    const productsTable = await queryRunner.getTable("products");
    if (productsTable) {
      const hasGender = productsTable.columns.some((c) => c.name === "gender");
      if (hasGender) {
        await queryRunner.dropColumn(productsTable.name, "gender");
      }
    }
  }
}
