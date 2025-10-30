import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { OtpSqlModel } from '@app/sql-schema/otp.sql-schema';
import { OtpSqlService } from './otp-sql.service';
import { OtpController } from './otp.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OtpSqlModel])],
  providers: [ OtpSqlService],
  controllers: [OtpController],
  exports: [OtpSqlService]
})
export class OtpModule {}