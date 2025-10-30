import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesSqlModel } from '@app/sql-schema/categories.sql-schema';
import { CategoriesSqlService } from './categories-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesSqlModel])],
  controllers: [CategoriesController],
  providers: [ CategoriesSqlService],
  exports: [CategoriesSqlService]
})
export class CategoriesModule {}
