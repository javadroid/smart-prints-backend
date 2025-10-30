import {
  ActivityLogModel,
  ActivityLogSchema,
  AuthenticatorModel,
  AuthenticatorSchema,
  CartModel,
  CartSchema,
  CategoriesModel,
  CategoriesSchema,
  DesignModel,
  DesignSchema,
  OrderModel,
  OrderSchema,
  OTPModel,
  OTPSchema,
  ProductTypeModel,
  ProductTypeSchema,
  UserModel,
  UserSchema,
  
} from '@app/schema';
import { WalletModel, WalletSchema } from '@app/schema';
import { ProductModel, ProductSchema } from '@app/schema';
import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URL, environment } = process.env;

@Global()
@Module({
  imports: [
    
  //    MongooseModule.forRootAsync({
  //     imports: [ConfigModule],
  //     useFactory: async (configService: ConfigService) => ({
  //       uri: configService.get<string>('MONGODB_URL'),
  //       connectionFactory: (connection) => {
  //         connection.on('connected', () => {
  //           console.log('Database connected');
  //         });
  //         connection.on('disconnected', () => {
  //           console.log('Database disconnected');
  //         });
  //         connection.on('error', (error) => {
  //           console.log('Database connection error:', error);
  //         });
  //         return connection;
  //       },
  //     }),
  //     inject: [ConfigService],
  //   }),

  //   MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    
  //   MongooseModule.forFeature([{ name:WalletModel.name, schema:WalletSchema }]),
  //   MongooseModule.forFeature([{ name:ActivityLogModel.name, schema:ActivityLogSchema }]),
  //   MongooseModule.forFeature([{ name: AuthenticatorModel.name, schema: AuthenticatorSchema }]),
  //   MongooseModule.forFeature([{ name: OTPModel.name, schema: OTPSchema }]),
  //       MongooseModule.forFeature([{ name: CartModel.name, schema: CartSchema }]),

  //  MongooseModule.forFeature([{ name: DesignModel.name, schema: DesignSchema }]),




  //   MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }]),
  //     MongooseModule.forFeature([{ name: OrderModel.name, schema: OrderSchema }]),
  //    MongooseModule.forFeature([{ name: CategoriesModel.name, schema: CategoriesSchema }]),
  //     MongooseModule.forFeature([{ name: ProductTypeModel.name, schema: ProductTypeSchema }]),
    
  ],

  exports: [MongooseModule],
})
export class GlobalMongooseModule {}
