import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { randomInt, randomUUID } from 'crypto';
import { UserSqlModel } from './user.sql-schema';

import { ProductStatusEnum } from '@app/enum';

// --- Type definitions for JSON columns (no decorators needed) ---
class ProductColor { name: string; hex: string; className: string; }
class ProductSize { name: string; label: string; inStock: boolean; }
class Mockups { front?: string; back?: string; left?: string; right?: string; }
class DesignRect { top: string; left: string; width: string; height:string; }
class DesignArea { front?: DesignRect; back?: DesignRect; left?: DesignRect; right?: DesignRect; }

@Entity({ name: 'products' })
export class ProductSqlModel {
@PrimaryGeneratedColumn('uuid') // Using UUID to match Mongoose's default ID type
  _id: string;

  @Column() // Use PrimaryColumn because we are generating the ID ourselves
  id: string;

  @Column({ default: false })
  isFeatured: boolean;

  @Column()
  name: string;

  // --- Relationships ---
  @Column()
  userID: string;

  @ManyToOne(() => UserSqlModel, user => user._id)
  @JoinColumn({ name: 'userID' })
  user: UserSqlModel;
  // --- Simple Columns ---
  @Column({ nullable:true, type: 'text' })
  description: string;
  
  @Column({nullable:true,})
  image: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true, comment: 'legacy' })
  price?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  basePrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salePrice?: number;

  @Column({ default: true })
  backgroundIn: boolean;

  @Column({ nullable: true, comment: 'legacy' })
  categoryID?: string;

  @Column()
  category: string;

  @Column({ type: 'int', default:0, nullable: true })
  quantity?: number;

@Column({
    type: 'enum',
    enum: ['custom', 'store'],
    default: 'custom',
  })
  type: string;

  @Column({ nullable: true })
  sizeGuide?: string;

  @Column({ nullable: true })
  measurement?: string;

  @Column({ type: 'float', nullable: true })
  distance?: number;
  
  @Column({ type:"enum", enum: ProductStatusEnum, default: ProductStatusEnum.ACTIVE })
  status: string;

  // --- Array & JSON Columns ---
  @Column({ nullable:true, type: 'simple-array' })
  types: string[];

  @Column({nullable:true, type:'simple-array',  })
  imageUrls: string[];

  @Column({ type: 'json', nullable: true })
  mockups?: Mockups;

  @Column({ type: 'json', nullable: true })
  designArea?: DesignArea;
  
  @Column({ type: 'json', nullable: true })
  availableColors: ProductColor[];

  @Column({ type: 'json', nullable: true })
  availableSizes: ProductSize[];

  // --- Timestamps & Hooks ---
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    
      this.id = "PDT" + randomInt(100, 999) + randomUUID().replace(/\D/g, '').substring(0, 3);
    
  }
}