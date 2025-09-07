
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDoc = HydratedDocument<OrderModel>;

@Schema({ timestamps: true })
export class OrderModel {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  userID: string;

  @Prop({ required: true })
  productID: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  shippingAddress: string;

 
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);