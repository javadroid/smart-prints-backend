import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WalletSqlModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userID: string;

  @Column({ nullable: true })
  barter_id?: string;

  @Column({ nullable: true })
  email?: string;

  @Column()
  accountName: string;

  @Column()
  accountNumber: string;

  @Column()
  bankName: string;

  @Column()
  bankCode: string;

  @Column()
  customerCode: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  balance: number;

  @Column({ default: 'NGN' })
  currency: string;

  @Column({ default: 'active', nullable: true })
  status?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}