import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthSqlService } from './auth-sql.service';
// import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


import {
  FacebookStrategy,
  JwtStrategy,
  
  XStrategy,
  GoogleStrategy,
  
} from '@app/strategy';

import { LocalStrategy } from './local.strategy';

// import { UsersModule, UsersService } from '../users/src';
// import { OrganizationAbilityFactory } from '../users/src/organization-ability.factory';
import { NotificationService, NotificationGateway, SendMailService, } from '@app/service';

import { SmsService } from '@app/service';
import { FlutterwaveService } from '@app/service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSqlModel } from '@app/sql-schema/user.sql-schema';
import { OtpSqlModel } from '@app/sql-schema/otp.sql-schema';


@Module({
  imports: [PassportModule, UsersModule, TypeOrmModule.forFeature([UserSqlModel, OtpSqlModel])],
  providers: [
    AuthSqlService,
    
    JwtStrategy,
    GoogleStrategy,
    FacebookStrategy,
    XStrategy,
    
    SendMailService,
    SmsService,
    LocalStrategy,
    NotificationService,NotificationGateway,FlutterwaveService
  ],
  controllers: [AuthController],
  exports:[AuthSqlService]
})
export class AuthModule {}
