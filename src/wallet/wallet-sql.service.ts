import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletSqlModel } from '@app/sql-schema/wallet.sql-schema';

@Injectable()
export class WalletSqlService {
  constructor(
    @InjectRepository(WalletSqlModel)
    private readonly walletRepository: Repository<WalletSqlModel>,
  ) {}

  async create(wallet: Partial<WalletSqlModel>): Promise<WalletSqlModel> {
    const newWallet = this.walletRepository.create(wallet);
    return this.walletRepository.save(newWallet);
  }

  async findAll(): Promise<WalletSqlModel[]> {
    return this.walletRepository.find();
  }

  async findOne(id: string): Promise<WalletSqlModel> {
    return this.walletRepository.findOne({ where: { id } });
  }

  async update(id: string, wallet: Partial<WalletSqlModel>): Promise<WalletSqlModel> {
    await this.walletRepository.update(id, wallet);
    return this.walletRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.walletRepository.delete(id);
  }
}