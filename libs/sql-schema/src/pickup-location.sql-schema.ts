import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pickup_locations' })
export class PickupLocationSqlModel {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  contactPhone: string;
 @Column({ type: 'decimal', default: 0, precision: 10, scale: 2 })
  price: number;
  @Column({ default: true })
  isActive: boolean;
}
