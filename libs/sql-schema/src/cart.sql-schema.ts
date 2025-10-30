// cart.entity.ts
import { ProductSqlModel } from '@app/sql-schema';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
// Assumes you have a Product entity

// This class can be used to type the 'color' column
class ProductColor {
  name: string;
  hex: string;
  className: string;
}

@Entity({ name: 'carts' }) // Corresponds to @Schema()
export class CartSqlModel {
  @PrimaryGeneratedColumn('uuid') // Using UUID to match Mongoose's default ID type
  _id: string;
  @Column() 
  id: string;

  @Column()
  userID: string;

  // --- Relationship with Product ---
  @ManyToOne(() => ProductSqlModel, { eager: true }) // eager: true automatically loads the product
  @JoinColumn({ name: 'productID' }) // Specifies the foreign key column name
  product: ProductSqlModel;

  @Column()
  productID: string; // The actual foreign key column

  @Column({
    type: 'enum',
    enum: ['custom', 'store'],
    default: 'custom',
  })
  type: string;

  @Column()
  productName: string;

  @Column({
    type: 'simple-json', // Store the ProductColor object as a JSONB column
    nullable: true,
  })
  color: ProductColor;

  @Column('decimal', { precision: 10, scale: 2 }) // Use 'decimal' for currency
  price: number;

  @Column()
  designImage: string;

  @Column({
    type: 'simple-json', // Use 'jsonb' for flexible object storage in PostgreSQL
    nullable: true,
    
  })
  metadata?: Record<string, any>;

  @CreateDateColumn() // Handles timestamps: true for createdAt
  createdAt: Date;

  @UpdateDateColumn() // Handles timestamps: true for updatedAt
  updatedAt: Date;
}