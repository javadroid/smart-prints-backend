import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDoc = CartModel & Document;
class ProductColor {
  @Prop()
  name: string;

  @Prop()
  hex: string;

  @Prop()
  className: string;
}
@Schema({ timestamps: true })
export class CartModel {
  @Prop({})
  userID: string;
  @Prop({})
  _id?: string;
  @Prop({})
  id: string;
  @Prop({})
  productID: string;
  @Prop({})
  color: ProductColor;
  @Prop({})
  price: number;
  @Prop({})
  designImage: string;
  @Prop({ type:Object}) // URL to the uploaded design/mockup image
  metadata?: Record<string, any>; // Optional metadata (e.g., size, custom notes)
}

export const CartSchema = SchemaFactory.createForClass(CartModel);
