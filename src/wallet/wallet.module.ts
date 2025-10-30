import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletSqlModel } from '@app/sql-schema/wallet.sql-schema';
import { WalletSqlService } from './wallet-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([WalletSqlModel])],
  providers: [WalletService, WalletSqlService],
  controllers: [WalletController],
  exports: [WalletSqlService]
})
export class WalletModule {}