
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDoc = HydratedDocument<OrderModel>;

@Schema({ timestamps: true })
export class OrderModel {
  @Prop({  })
  id: string;

  @Prop({ ref: 'UserModel' })
  userID: string;

  @Prop({ ref: 'ProductModel' })
  productID: string;

  @Prop({  })
  quantity: number;

  @Prop({  })
  totalPrice: number;

  @Prop({ type: [String] })
  imagesUrls: string[];



  @Prop({type: Object })
  orderDetails: Record<string, any>;

  @Prop({  })
  status: string;

  @Prop({ ref: 'AddressModel' })
  addressID: string;

 
}

export const OrderSchema = SchemaFactory.createForClass(OrderModel);