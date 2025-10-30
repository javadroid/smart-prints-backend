import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { OtpType } from '@app/enum';

@Entity()
export class OtpSqlModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  code1?: string;

  @Column({ default: 'active' })
  status: string;

  @Column({ default: 30 })
  duration: number;

  @Column()
  userID: string;

  @Column({ type: 'enum', enum: OtpType, default: OtpType.EMAIL_VERIFICATION })
  type: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}