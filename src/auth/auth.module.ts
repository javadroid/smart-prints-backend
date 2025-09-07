import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

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



@Module({
  imports: [PassportModule, UsersModule],
  providers: [
    AuthService,
    JwtStrategy,
    GoogleStrategy,
    FacebookStrategy,
    XStrategy,
    UsersService,
    SendMailService,
    SmsService,
    LocalStrategy,
    NotificationService,NotificationGateway,FlutterwaveService
  ],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
