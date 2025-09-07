    import { ProductStatusEnum } from '@app/enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomInt, randomUUID } from 'crypto';
import { Document } from 'mongoose';

export type ProductDoc = ProductModel & Document;

class Rating {
  @Prop({  })
  rating: number;

  @Prop()
  feedback: string;

  @Prop({  })
  userID: string;

  @Prop({ default: Date.now })
  date: Date;
}

@Schema({ timestamps: true })
export class ProductModel {
  @Prop()
  id: string;

  @Prop({  })
  name: string;

  @Prop({ ref:"UserModel" })
  userID: string;

  @Prop({ ref:"FarmModel" })
  farmID: string;

  @Prop({  })
  type: string[];

  @Prop({  })
  description: string;

  @Prop({  })
  price: number;

  @Prop({  })
  categoryID: string;

  @Prop({  })
  quantity: number;

  @Prop({ type: [String], default: [] })
  imageUrls?: string[];

  @Prop({ type: [Rating] })
  rating?: Rating[];

  @Prop({  })
  measurement: string;

  @Prop()
  distance?: number;
  
  @Prop({ enum: ProductStatusEnum, default: ProductStatusEnum.ACTIVE })
  status?: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
ProductSchema.pre<ProductModel>('save', async function (next, error) {
  if (!this.id) {
    this.id = "PDT"+ randomInt(100, 999) + randomUUID().replace(/\D/g, '').substring(0, 3);
  }
  
  next();
});