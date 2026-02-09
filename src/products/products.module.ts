import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSqlModel } from '@app/sql-schema/product.sql-schema';
import { UserSqlModel } from '@app/sql-schema/user.sql-schema';
import { ProductSqlService } from './product-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSqlModel, UserSqlModel])],
  controllers: [ProductController],
  providers: [ ProductSqlService],
  exports: [ProductSqlService]
})
export class ProductsModule {}
