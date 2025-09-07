import {
  ActivityLogModel,
  ActivityLogSchema,
  AuthenticatorModel,
  AuthenticatorSchema,
  CategoriesModel,
  CategoriesSchema,
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
const DBLINK =
  environment === 'production'
    ? MONGODB_URL
    : 'mongodb://localhost:27017/smartprints'; 

@Global()
@Module({
  imports: [
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
    MongooseModule.forRoot(DBLINK),

    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    
    MongooseModule.forFeature([{ name:WalletModel.name, schema:WalletSchema }]),
    MongooseModule.forFeature([{ name:ActivityLogModel.name, schema:ActivityLogSchema }]),
    MongooseModule.forFeature([{ name: AuthenticatorModel.name, schema: AuthenticatorSchema }]),
    MongooseModule.forFeature([{ name: OTPModel.name, schema: OTPSchema }]),

    MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductSchema }]),
      MongooseModule.forFeature([{ name: OrderModel.name, schema: OrderSchema }]),
     MongooseModule.forFeature([{ name: CategoriesModel.name, schema: CategoriesSchema }]),
      MongooseModule.forFeature([{ name: ProductTypeModel.name, schema: ProductTypeSchema }]),
    
  ],

  exports: [MongooseModule],
})
export class GlobalMongooseModule {}
