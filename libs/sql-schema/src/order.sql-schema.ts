import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { UserSqlModel } from "./user.sql-schema";
import { CartSqlModel } from ".";

@Entity({ name: "orders" })
export class OrderSqlModel {
  @PrimaryGeneratedColumn("uuid")
  _id: string;
  @Column()
  id: string;
  // --- Relationship to UserSqlModel ---
  @Column()
  userID: string; // Foreign key column

  @ManyToOne(() => UserSqlModel, (user) => user._id)
  @JoinColumn({ name: "userID" })
  user: UserSqlModel;

  // --- Relationship to OrderItemSqlModel ---
  // An order has many products (order items)
  // @OneToMany(() => CartSqlModel, (cart) => cart, { cascade: true })
  // products: CartSqlModel[];
    @Column({ type: "json", nullable: true })
  products: Record<string, any>;

  @Column({ nullable: true })
  flutterwaveRef: string;

  @Column({ nullable: true })
  paystackRef: string;

  @Column({ nullable: true })
  authorization_url: string;

  @Column({ nullable: true })
  accessCode: string;

  @Column({ nullable: true })
  tx_ref: string;

  @Column({ default: false })
  isPaid: boolean;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  totalPrice: number;

  @Column({ type: "simple-array", nullable: true })
  imageUrls: string[];

  @Column({ type: "json", nullable: true })
  orderDetails: Record<string, any>;

  @Column({ default: "pending" })
  status: string;

  @Column()
  address: string;

  @Column({ type: "json", nullable: true })
  shippingAddress: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
