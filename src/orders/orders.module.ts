import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { FlutterwaveService, SendMailService } from '@app/service';
import { PaystackService } from '@app/service/payment/paystack';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSqlModel } from '@app/sql-schema/order.sql-schema';
import { OrderSqlService } from './order-sql.service';
import { CartSqlModel, DeliveryPriceSqlModel, PickupLocationSqlModel, ProductSqlModel, SiteSettingsSqlModel, TransactionSqlModel } from '@app/sql-schema';

@Module({
  imports: [TypeOrmModule.forFeature([OrderSqlModel, TransactionSqlModel, CartSqlModel, DeliveryPriceSqlModel, SiteSettingsSqlModel,PickupLocationSqlModel,ProductSqlModel]),],

  controllers: [OrderController],
  providers: [FlutterwaveService, PaystackService, OrderSqlService, SendMailService],
  exports: [OrderSqlService]
})
export class OrdersModule { }
