import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartSqlModel } from '@app/sql-schema/cart.sql-schema';
import { CartSqlService } from './cart-sql.service';
import { CategoriesSqlService } from 'src/categories/categories-sql.service';
import { ProductSqlModel } from '@app/sql-schema';

@Module({
  imports: [TypeOrmModule.forFeature([CartSqlModel,ProductSqlModel])],
  controllers: [CartController],
  providers: [ CartSqlService],
  exports: [CartSqlService]
})
export class CartModule {}
