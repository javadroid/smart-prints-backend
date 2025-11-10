import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { UserSqlModel, ProductSqlModel, OrderSqlModel, CategoriesSqlModel, CartSqlModel, DesignSqlModel, OtpSqlModel, WalletSqlModel, DeliveryPriceSqlModel } from '@app/sql-schema';


dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  url: process.env.SQL_URI,
  entities: [
    UserSqlModel,
    ProductSqlModel,
    OrderSqlModel,
    CategoriesSqlModel,
    CartSqlModel,
    DesignSqlModel,
    OtpSqlModel,
    WalletSqlModel,
    DeliveryPriceSqlModel,
  ],
  migrations: [__dirname + '/migrations/**/*.ts'],
  synchronize: false,
  logging: ['query', 'error'],
});

export default AppDataSource;