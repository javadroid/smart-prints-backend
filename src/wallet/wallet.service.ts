import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { WalletSqlModel } from '@app/sql-schema/wallet.sql-schema';
import { TransactionSqlModel } from '@app/sql-schema';
import { RequestWithdrawalDTO, WalletDTO } from '@app/dto';
import { TransactionStatus, TransactionType } from '@app/enum';
import { getSqlMetadata, serviceResponse } from '@app/service';
import { WithdrawSqlModel } from '@app/sql-schema/withdraw.sql-schema ';
import { PaystackService } from '@app/service/payment/paystack';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletSqlModel)
    private readonly walletRepository: Repository<WalletSqlModel>,
    @InjectRepository(TransactionSqlModel)
    private readonly transactionRepository: Repository<TransactionSqlModel>,
     @InjectRepository(WithdrawSqlModel)
    private readonly withdrawRepository: Repository<WithdrawSqlModel>,
    private readonly payStackService: PaystackService
   
  ) {}

@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async updateTransactionStatus() {
  // get and update all transaction pending that is more than 2weeks old
  const transactions = await this.transactionRepository.find({
    where: {
      status: TransactionStatus.ACTIVE,
    },
  });
  for (const transaction of transactions) {
    if (transaction.createdAt < new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)) {
      transaction.status = TransactionStatus.ACTIVE;
      await this.transactionRepository.save(transaction);
    }
  }
  }

  async requestWithdrawal( requestWithdrawalDto: RequestWithdrawalDTO) {
    const transaction = await this.transactionRepository.sum('amount', {
       userID: requestWithdrawalDto.userID,
        status: TransactionStatus.ACTIVE,
    });
    if (!transaction) {
      throw new BadRequestException('No active transactions found');
    }
const isWithdrawExist= await this.withdrawRepository.findOne({
  where: {
    userID: requestWithdrawalDto.userID,
    status: "pending",
  },
});

if (isWithdrawExist) {
  throw new BadRequestException('Withdrawal request already submitted');
}

    const withdraw =  this.withdrawRepository.create({
         userID: requestWithdrawalDto.userID,
        amount: transaction,
        walletID: requestWithdrawalDto.walletID,
        status: "pending",
    });
  const isSaved=  await this.withdrawRepository.save(withdraw);


    try {
     

      return serviceResponse({
        message: 'Withdrawal request submitted successfully',
        data: isSaved,
        status: true,
      });

    } catch (err) {
     
      throw err;
    } finally {
     
    }
  }
  async approveWithdrawal(withdrawID: string) {
    const withdraw = await this.withdrawRepository.findOne({ where: { id: withdrawID } });
    if (!withdraw) {
        throw new NotFoundException('Withdrawal request not found');
    }
    withdraw.status = 'approved';
    await this.withdrawRepository.save(withdraw);
    await this.transactionRepository.update({
      userID: withdraw.userID,
      status: TransactionStatus.ACTIVE,
    }, {
      status: TransactionStatus.SUCCESS,
    });
    return serviceResponse({
        message: 'Withdrawal request approved',
        data: withdraw,
        status: true,
    });
  }

  // Helper to get wallet
  async getWallet(userID: string) {
    const wallet = await this.walletRepository.findOne({ where: { userID } });
    if (!wallet) {
      throw new NotFoundException('Wallet not found');
    }
    return serviceResponse({
        status: true,
        message: "Wallet retrieved",
        data: wallet
    })
  }

  async createWallet(data: WalletDTO,userID: string) {
    const alreadyExist= await this.walletRepository.findOne({
      where: {
        userID: userID,
      },
    });
    let wallet;
    if (alreadyExist) {
      await this.walletRepository.update({
        userID,
      }, {
        ...data,
      });
      wallet = await this.walletRepository.findOne({ where: { userID } });
    }else{
      wallet = this.walletRepository.create({
        ...data,
        userID,
      });
    }
    return this.walletRepository.save(wallet);
  }

  // getWithdrawals
  async getWithdrawals(userID: string, query: any) {
    const { page = 1, limit = 10,  } = query;
    const skip = (page - 1) * limit;
    const withdraws = await this.withdrawRepository.find({
      where: {
        userID,
      },
      skip,
      take: limit,
      order: {
        createdAt: 'DESC',
      }
    });
    if (!withdraws) {
      throw new NotFoundException('Withdrawals not found');
    }
    return serviceResponse({
        status: true,
        message: "Withdrawals retrieved",
        data: withdraws,
        metadata: await getSqlMetadata({
          model: this.withdrawRepository,
          query,
          querys:{
            userID,
          }
        })
    })
  }

  // get all withdrawals
  async getAllWithdrawals(query: any) {
       const { page = 1, limit = 10,  } = query;
    const skip = (page - 1) * limit;
    
    const withdraws = await this.withdrawRepository.find({
      skip,
      take: limit,
       order: {
        createdAt: 'DESC',
      },
      relations:["user","wallet"]
    });
    if (!withdraws) {
      throw new NotFoundException('Withdrawals not found');
    }
    return serviceResponse({
        status: true,
        message: "Withdrawals retrieved",
        data: withdraws,
        metadata: await getSqlMetadata({
          model: this.withdrawRepository,
          query,
          querys:{}
        }

        )
    })
  }

  // paystack get all banks
  async getPaystackBanks() {
    const pay= await this.payStackService.getPaystackBanks();
    return serviceResponse({
      status: true,
      message: "Paystack banks retrieved",
      data: pay,
    });
  }
  // paystack verify account number
  async verifyPaystackAccountNumber(accountNumber: string, bankCode: string) {
    const pay= await this.payStackService.verifyPaystackAccountNumber(accountNumber, bankCode);
    return serviceResponse({
      status: true,
      message: "Paystack account number verified",
      data: pay,
    });
  }
}
