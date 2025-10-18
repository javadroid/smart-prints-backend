import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { FlutterwaveService } from '@app/service';
import { PaystackService } from '@app/service/payment/paystack';

@Module({
  imports: [],
  
  controllers: [OrderController],
  providers: [OrderService,FlutterwaveService,PaystackService],
})
export class OrdersModule {}
