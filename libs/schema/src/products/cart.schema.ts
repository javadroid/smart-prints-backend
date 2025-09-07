import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CartDoc = CartModel & Document;

@Schema({ timestamps: true })
export class CartItem {
  @Prop({ required: true })
  productID: string;

  @Prop({ required: false })
  color?: string;

  @Prop({ required: false })
  size?: string;

  @Prop({ required: true, default: 1 })
  quantity: number;

  @Prop({ required: true })
  unitPrice: number;

  @Prop({ required: true })
  lineTotal: number;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);

@Schema({ timestamps: true })
export class CartModel {
  @Prop({ required: true })
  userID: string;

  @Prop({ type: [CartItemSchema], default: [] })
  items: CartItem[];

  @Prop({ required: true, default: 0 })
  subtotal: number;

  @Prop({ required: false, default: 0 })
  tax?: number;

  @Prop({ required: false, default: 0 })
  shipping?: number;

  @Prop({ required: true, default: 0 })
  total: number;
}

export const CartSchema = SchemaFactory.createForClass(CartModel);


