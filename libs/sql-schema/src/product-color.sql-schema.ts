import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'product_colors' })
export class ProductColorSqlModel {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  hex: string;

  @Column({ nullable: true })
  className: string;
}
