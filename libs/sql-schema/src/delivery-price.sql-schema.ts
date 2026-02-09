import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'delivery_prices' })
@Unique(["country", "state", "lga", "zone"])
export class DeliveryPriceSqlModel {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ length: 100 })  // Adjust length as needed
country: string;

@Column({ length: 100 })  // Adjust length as needed
state: string;

@Column({ length: 100 })  // Adjust length as needed
lga: string;

@Column({ length: 100 })  // Adjust length as needed
zone: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 3000.00 })
  deliveryFee: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 1000.00 })
  additionalFee: number;

  @CreateDateColumn()
  createdAt: Date;

  

  @UpdateDateColumn()
  updatedAt: Date;
}
