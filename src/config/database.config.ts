import { registerAs } from '@nestjs/config';

export enum DatabaseType {
  MONGO = 'mongo',
  SQL = 'sql',
}

export class DatabaseConfig {
  type: DatabaseType;
  mongoUri: string;
  sqlUri: string;
}

export default registerAs('database', (): DatabaseConfig => {
  const config = new DatabaseConfig();
  config.type = process.env.DATABASE_TYPE as DatabaseType || DatabaseType.MONGO;
  config.mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/smartprints';
  config.sqlUri = process.env.SQL_URI || 'postgresql://user:password@host:5432/database';
  return config;
});