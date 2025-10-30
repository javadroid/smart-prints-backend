import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSqlModel } from '@app/sql-schema/user.sql-schema';

@Injectable()
export class UserSqlService {
  constructor(
    @InjectRepository(UserSqlModel)
    private readonly userRepository: Repository<UserSqlModel>,
  ) {}

  async create(user: Partial<UserSqlModel>): Promise<UserSqlModel> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<UserSqlModel[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserSqlModel> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, user: Partial<UserSqlModel>): Promise<UserSqlModel> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}