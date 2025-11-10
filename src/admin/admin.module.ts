import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { FlutterwaveService, NotificationGateway, NotificationService, SendMailService } from '@app/service';
import { UserSqlModel, ProductSqlModel, OrderSqlModel, CategoriesSqlModel, CartSqlModel, DesignSqlModel, OtpSqlModel, WalletSqlModel, DeliveryPriceSqlModel } from '@app/sql-schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserSqlModel, ProductSqlModel,  OrderSqlModel, CategoriesSqlModel, CartSqlModel, DesignSqlModel, OtpSqlModel, WalletSqlModel, DeliveryPriceSqlModel])],
  controllers: [AdminController],
  providers: [AdminService,NotificationService,NotificationGateway,SendMailService, ],
})
export class AdminModule {}
