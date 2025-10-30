import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OtpSqlModel } from '@app/sql-schema/otp.sql-schema';

@Injectable()
export class OtpSqlService {
  constructor(
    @InjectRepository(OtpSqlModel)
    private readonly otpRepository: Repository<OtpSqlModel>,
  ) {}

  async create(otp: Partial<OtpSqlModel>): Promise<OtpSqlModel> {
    const newOtp = this.otpRepository.create(otp);
    return this.otpRepository.save(newOtp);
  }

  async findAll(): Promise<OtpSqlModel[]> {
    return this.otpRepository.find();
  }

  async findOne(id: string): Promise<OtpSqlModel> {
    return this.otpRepository.findOne({ where: { id } });
  }

  async update(id: string, otp: Partial<OtpSqlModel>): Promise<OtpSqlModel> {
    await this.otpRepository.update(id, otp);
    return this.otpRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.otpRepository.delete(id);
  }
}