import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { UserSqlModel } from './user.sql-schema';
import { WalletSqlModel } from './wallet.sql-schema';

@Entity()
export class WithdrawSqlModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userID: string;

  @Column({ type: 'decimal', precision: 10, scale: 2,nullable:true, })
  amount: number;

  @ManyToOne(() => UserSqlModel, (user) => user._id)
   @JoinColumn({ name: "userID" })
   user: UserSqlModel;

   @Column()
   walletID: string;

   @ManyToOne(() => WalletSqlModel, (wallet) => wallet._id)
   @JoinColumn({ name: "walletID" })
   wallet: WalletSqlModel;


  @Column({ default: 'pending' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}