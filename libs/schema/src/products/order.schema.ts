
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDoc = HydratedDocument<OrderModel>;
@Schema()
class ProductColor {
  @Prop()
  name: string;

  @Prop()
  hex: string;

  @Prop()
  className: string;
}
@Schema()
class CartModel {
  @Prop({})
  userID: string;
  @Prop({})
  _id?: string;
  @Prop({})
  id: string;
  @Prop()
    productName: string;
  @Prop()
  fullName: string;
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
@Schema({ timestamps: true })
export class OrderModel {
  @Prop({  })
  id: string;

  @Prop({ ref: 'UserModel' })
  userID: string;

  @Prop({ type: [CartModel] })
  products: CartModel[];

  @Prop()
  flutterwaveRef: string;
  @Prop()
  paystackRef: string;
   @Prop()
  authorization_url: string;
   @Prop()
  accessCode: string;
  @Prop()
  tx_ref: string;

  @Prop({ default: false })
  isPaid: boolean;

  @Prop({  })
  totalPrice: number;

  @Prop({ type: [String] })
  imageUrls: string[];
  @Prop({type: Object })
  orderDetails: Record<string, any>;

  @Prop({ default: 'pending' })
  status: string;

  @Prop({  })
  address: string;

  @Prop({type: Object })
  shippingAddress: Record<string, any>;
 
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);