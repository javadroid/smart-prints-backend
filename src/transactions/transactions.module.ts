import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { ProductSqlModel, TransactionSqlModel, UserSqlModel } from '@app/sql-schema';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionSqlModel,ProductSqlModel, UserSqlModel])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
