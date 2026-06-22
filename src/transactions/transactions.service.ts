import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { ProductSqlModel, TransactionSqlModel, UserSqlModel } from '@app/sql-schema';
import { CreateTransactionDTO, TransactionDTO } from '@app/dto';
import { serviceResponse } from '@app/service';
import { TransactionStatus } from '@app/enum';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(TransactionSqlModel)
    private readonly transactionRepository: Repository<TransactionSqlModel>,

     @InjectRepository(ProductSqlModel)
    private readonly productRepository: Repository<ProductSqlModel>,

    @InjectRepository(UserSqlModel)
    private readonly userRepository: Repository<UserSqlModel>,
  ) {}

  async create(createTransactionDto: CreateTransactionDTO) {
    // const transaction = this.transactionRepository.create(createTransactionDto);
    // const savedTransaction = await this.transactionRepository.save(transaction);
    return serviceResponse({
      message: 'Transaction created successfully',
      data: {savedTransaction:""},
      status: true,
    });
  }

  async findAll(params:CreateTransactionDTO,query: any) {
    const { page = 1, limit = 10,  } = query;
    const skip = (page - 1) * limit;
    
   

    const [transactions, total] = await this.transactionRepository.findAndCount({
      where:params,
      skip,
      take: limit,
      relations: ['user','order','product'],
      order: { createdAt: 'DESC' },
    });

    return serviceResponse({
      message: 'Transactions retrieved successfully',
      data: transactions,
      status: true,
      // You might want to add metadata/pagination info here in a real app
      metadata: { total, page, limit },
    });
  }

  async findOne(id: string) {
    const transaction = await this.transactionRepository.findOne({ where: { id } });
    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    return serviceResponse({
      message: 'Transaction retrieved successfully',
      data: transaction,
      status: true,
    });
  }

  async update(id: string, updateTransactionDto: Partial<CreateTransactionDTO>) {
    // const transaction = await this.transactionRepository.preload({
    //   id,
    //   ...updateTransactionDto,
    // });

    // if (!transaction) {
    //   throw new NotFoundException(`Transaction with ID ${id} not found`);
    // }

    // const updatedTransaction = await this.transactionRepository.save(transaction);
    return serviceResponse({
      message: 'Transaction updated successfully',
      data: {},
      status: true,
    });
  }

  async remove(id: string) {
    const transaction = await this.transactionRepository.findOne({ where: { id } });
    if (!transaction) {
      throw new NotFoundException(`Transaction with ID ${id} not found`);
    }
    await this.transactionRepository.remove(transaction);
    return serviceResponse({
      message: 'Transaction deleted successfully',
      status: true,
    });
  }

  async getTopUsers(limit: number) {
    const take = limit ? Number(limit) : 10;

    const topTransactions = await this.transactionRepository
      .createQueryBuilder('transaction')
      .select('transaction.userID', 'userID')
      .addSelect('SUM(transaction.amount)', 'totalAmount')
      .addSelect('COUNT(transaction.id)', 'transactionCount')
      .where('transaction.status = :status', { status: TransactionStatus.SUCCESS })
      .groupBy('transaction.userID')
      .orderBy('totalAmount', 'DESC')
      .limit(take)
      .getRawMany();

    if (!topTransactions.length) {
      return serviceResponse({
        message: 'No active transactions found',
        data: [],
        status: true,
      });
    }

    const userIDs = topTransactions.map((t) => t.userID);
    const users = await this.userRepository.find({
      where: { _id: In(userIDs) },
      select: ['_id', 'fullname', 'email', 'profileImage','coverImage', 'username'],
    });

    const result = topTransactions.map((t) => {
     
      const user = users.find((u) => u._id === t.userID);
      return {
        user,
        totalAmount: t.totalAmount,
        transactionCount: t.transactionCount,
      };
    });

    return serviceResponse({
      message: 'Top users retrieved successfully',
      data: result,
      status: true,
    });
  }

  //stats for a user for all status
  async stats(userID: string) {
    
   const pendingTransactions = await this.transactionRepository.count({ where: { userID, status: TransactionStatus.PENDING } });
   const activeTransactions = await this.transactionRepository.count({ where: { userID, status: TransactionStatus.ACTIVE } });
   const successTransactions = await this.transactionRepository.count({ where: { userID, status: TransactionStatus.SUCCESS } });
   const productApproved = await this.productRepository.count({ where: { userID,isApproved:true } });
   const productPendingApproval = await this.productRepository.count({ where: { userID,isApproved:false } });
   const totalAmountEarned = await this.transactionRepository.sum('resellerProfit', { userID, status: TransactionStatus.SUCCESS  });
   const totalWithdrawable = await this.transactionRepository.sum('resellerProfit', { userID, status: TransactionStatus.ACTIVE  });
   const totalPending = await this.transactionRepository.sum('resellerProfit', { userID, status: TransactionStatus.PENDING  });
   return serviceResponse({
      message: 'Transactions stats retrieved successfully',
      data: {
        pendingTransactions,
        activeTransactions,
        successTransactions,
        productApproved,
        totalAmountEarned,
        totalWithdrawable,
        totalPending,
        totalTransactions: pendingTransactions + activeTransactions + successTransactions,
        productPendingApproval,
      },
      status: true,
    });
  }



}
