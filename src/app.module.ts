import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UploadsModule } from './uploads/uploads.module';
import { MulterModule } from '@nestjs/platform-express';
import { CaslModule } from './casl/casl.module';

import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { GlobalMongooseModule } from 'src/global-mongoose.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { DesignsModule } from './designs/designs.module';
import { AdminModule } from './admin/admin.module';



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
        GlobalMongooseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          // load: [configuration],
          // validationSchema,
        }),
        ThrottlerModule.forRoot([{
          ttl: 60000,
          limit: 10,
        }]),
  AuthModule,
  UploadsModule,
  UsersModule, ProductsModule, CartModule, OrdersModule, CategoriesModule, DesignsModule, AdminModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
