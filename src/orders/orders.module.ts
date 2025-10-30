import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { FlutterwaveService } from '@app/service';
import { PaystackService } from '@app/service/payment/paystack';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSqlModel } from '@app/sql-schema/order.sql-schema';
import { OrderSqlService } from './order-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderSqlModel])],
  
  controllers: [OrderController],
  providers: [FlutterwaveService,PaystackService, OrderSqlService],
  exports: [OrderSqlService]
})
export class OrdersModule {}
