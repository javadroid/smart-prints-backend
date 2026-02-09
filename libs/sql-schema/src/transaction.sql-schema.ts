import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserSqlModel } from './user.sql-schema';
import { TransactionStatus, TransactionType } from '@app/enum';
import { OrderSqlModel } from './order.sql-schema';
import { ProductSqlModel } from './product.sql-schema';

@Entity({ name: 'transactions' })
export class TransactionSqlModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userID: string;

  @ManyToOne(() => UserSqlModel)
  @JoinColumn({ name: 'userID' })
  user: UserSqlModel;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: TransactionType, 
  })
  transactionType: string;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.PENDING,
  })
  status: string;

  @Column({ nullable: true })
  reference?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  orderID?: string;
  @Column({ nullable: true })
  productID?: string;
 @ManyToOne(() => OrderSqlModel)
  @JoinColumn({ name: 'orderID' })
  order: OrderSqlModel;

   @ManyToOne(() => ProductSqlModel)
  @JoinColumn({ name: 'productID' })
  product: ProductSqlModel;
  @Column({
    type: 'simple-json', // Use 'jsonb' for flexible object storage in PostgreSQL
    nullable: true,
    
  })
  metadata?: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
