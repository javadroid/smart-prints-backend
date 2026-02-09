import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { WalletSqlModel } from '@app/sql-schema/wallet.sql-schema';
import { TransactionSqlModel } from '@app/sql-schema';
import { RequestWithdrawalDTO } from '@app/dto';
import { TransactionStatus, TransactionType } from '@app/enum';
import { serviceResponse } from '@app/service';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletSqlModel)
    private readonly walletRepository: Repository<WalletSqlModel>,
    @InjectRepository(TransactionSqlModel)
    private readonly transactionRepository: Repository<TransactionSqlModel>,
    private readonly dataSource: DataSource,
  ) {}

  async requestWithdrawal(userID: string, requestWithdrawalDto: RequestWithdrawalDTO) {
    const { amount, accountNumber, bankCode, accountName } = requestWithdrawalDto;

    if (amount <= 0) {
      throw new BadRequestException('Amount must be greater than 0');
    }

    // Start a database transaction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // 1. Find user's wallet (locking it for update)
      const wallet = await queryRunner.manager.findOne(WalletSqlModel, {
        where: { userID },
        lock: { mode: 'pessimistic_write' },
      });

      if (!wallet) {
        throw new NotFoundException('Wallet not found for this user');
      }

      // 2. Check balance
      if (Number(wallet.balance) < Number(amount)) {
        throw new BadRequestException('Insufficient wallet balance');
      }

      // 3. Create Transaction Record
      const transaction = queryRunner.manager.create(TransactionSqlModel, {
        userID,
        amount,
        transactionType: TransactionType.WITHDRAWAL,
        status: TransactionStatus.PENDING,
        description: 'Withdrawal Request',
        metadata: {
          accountNumber: accountNumber || wallet.accountNumber,
          bankCode: bankCode || wallet.bankCode,
          accountName: accountName || wallet.accountName,
        },
      });
      const savedTransaction = await queryRunner.manager.save(transaction);

      // 4. Deduct balance
      wallet.balance = Number(wallet.balance) - Number(amount);
      await queryRunner.manager.save(wallet);

      await queryRunner.commitTransaction();

      return serviceResponse({
        message: 'Withdrawal request submitted successfully',
        data: savedTransaction,
        status: true,
      });

    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  // Helper to get wallet
  async getWallet(userID: string) {
    const wallet = await this.walletRepository.findOne({ where: { userID } });
    if (!wallet) {
        // Create a wallet if not exists? Or throw? 
        // For now return null or empty object if that's the pattern, but usually we create one.
        // Assuming wallet is created on user registration.
        return serviceResponse({
            status: false,
            message: "Wallet not found",
            data: null
        })
    }
    return serviceResponse({
        status: true,
        message: "Wallet retrieved",
        data: wallet
    })
  }
}
