import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletSqlModel } from '@app/sql-schema/wallet.sql-schema';

import { TransactionSqlModel } from '@app/sql-schema';
import { WithdrawSqlModel } from '@app/sql-schema/withdraw.sql-schema ';
import { PaystackService } from '@app/service/payment/paystack';

@Module({
  imports: [TypeOrmModule.forFeature([WalletSqlModel, TransactionSqlModel, WithdrawSqlModel])],
  providers: [WalletService, PaystackService],
  controllers: [WalletController],
  exports: [ WalletService]
})
export class WalletModule {}