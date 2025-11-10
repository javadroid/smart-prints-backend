import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UploadsModule } from './uploads/uploads.module';
import { MulterModule } from '@nestjs/platform-express';
import { CaslModule } from './casl/casl.module';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { GlobalMongooseModule } from 'src/global-mongoose.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { DesignsModule } from './designs/designs.module';
import { AdminModule } from './admin/admin.module';
import { OtpModule } from './otp/otp.module';
import { WalletModule } from './wallet/wallet.module';
import databaseConfig from './config/database.config';

import { UserSqlModel } from '@app/sql-schema/user.sql-schema';
import { ProductSqlModel, } from '@app/sql-schema/product.sql-schema';
import { OrderSqlModel } from '@app/sql-schema/order.sql-schema';
import { CategoriesSqlModel } from '@app/sql-schema/categories.sql-schema';
import { CartSqlModel } from '@app/sql-schema/cart.sql-schema';
import { DesignSqlModel } from '@app/sql-schema/design.sql-schema';
import { OtpSqlModel } from '@app/sql-schema/otp.sql-schema';
import { WalletSqlModel } from '@app/sql-schema/wallet.sql-schema';
import { JwtModule } from '@nestjs/jwt';
import { DeliveryPriceSqlModel } from '@app/sql-schema';


@Module({
  imports: [
     CaslModule,
        ScheduleModule.forRoot(),
        MailerModule.forRoot({
          transport: {
            host: process.env.EMAIL_HOST||"jamfortetech.com",
            auth: {
              user: process.env.EMAIL_USERNAME||"emmanuel@jamfortetech.com",
              pass: process.env.EMAIL_PASSWORD||"Simple@1010*",
            },
          },
        }),
        MulterModule.registerAsync({
          useFactory: () => ({
            dest: './uploads',
          }),
        }),
        // GlobalMongooseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          load: [databaseConfig],
          // validationSchema,
        }),
        JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}`,
        },
      }),
    }),
        ThrottlerModule.forRoot([{
          ttl: 60000,
          limit: 10,
        }]),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
         
          useFactory: async (configService: ConfigService) => ({
            type: 'mysql', // Assuming PostgreSQL for SQL_URI
            url: configService.get<string>('SQL_URI'),
            entities: [UserSqlModel, ProductSqlModel,  OrderSqlModel, CategoriesSqlModel, CartSqlModel, DesignSqlModel, OtpSqlModel, WalletSqlModel, DeliveryPriceSqlModel], // Register your SQL entities here
            synchronize: false, // Set to false in production
            autoLoadEntities: true,
            logging: ['query', 'error'],
          }),
        }),
         TypeOrmModule.forFeature([ProductSqlModel,CategoriesSqlModel  ]),
  AuthModule,
  AdminModule,
  UploadsModule,
  UsersModule, ProductsModule, CartModule, OrdersModule, CategoriesModule, DesignsModule, OtpModule, WalletModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
