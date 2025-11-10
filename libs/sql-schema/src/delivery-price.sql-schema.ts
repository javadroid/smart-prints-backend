import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'delivery_prices' })
@Unique(["country", "state", "lga"])
export class DeliveryPriceSqlModel {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  lga: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 3000.00 })
  deliveryFee: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 1000.00 })
  additionalFee: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}