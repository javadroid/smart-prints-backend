import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { NotificationGateway, NotificationService, SendMailService } from '@app/service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSqlModel } from '@app/sql-schema/user.sql-schema';
import { UserSqlService } from './user-sql.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSqlModel])],
  providers: [ NotificationService, NotificationGateway, SendMailService, UserSqlService],
  exports: [ UserSqlService],
  controllers: [UsersController]
})
export class UsersModule {}
