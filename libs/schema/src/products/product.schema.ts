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

class ProductColor {
  @Prop()
  name: string;

  @Prop()
  hex: string;

  @Prop()
  className: string;
}

class ProductSize {
  @Prop()
  name: string;

  @Prop()
  label: string;

  @Prop()
  inStock: boolean;
}

class Mockups {
  @Prop()
  front?: string;

  @Prop()
  back?: string;

  @Prop()
  left?: string;

  @Prop()
  right?: string;
}

class DesignRect {
  @Prop()
  top: string;

  @Prop()
  left: string;

  @Prop()
  width: string;

  @Prop()
  height: string;
}

class DesignArea {
  @Prop({ type: DesignRect })
  front?: DesignRect;

  @Prop({ type: DesignRect })
  back?: DesignRect;

  @Prop({ type: DesignRect })
  left?: DesignRect;

  @Prop({ type: DesignRect })
  right?: DesignRect;
}

@Schema({ timestamps: true })
export class ProductModel {
  @Prop()
  id: string;

  @Prop({ default: false })
  isFeatured?: boolean;


  @Prop({  })
  name: string;

  @Prop({ ref:"UserModel" })
  userID: string;

  @Prop({ ref:"FarmModel" })
  farmID: string;

  @Prop({ type: [String] })
  type: string[];

  @Prop({  })
  description: string;

  @Prop({  })
  price?: number; // legacy

  @Prop({  })
  basePrice: number;

  @Prop({ required: false })
  salePrice?: number;

  @Prop({  })
  categoryID?: string; // legacy

  @Prop({  })
  category: string;

  @Prop({  })
  quantity?: number;

  @Prop({ type: Mockups })
  mockups?: Mockups;

  @Prop({ type: DesignArea })
  designArea?: DesignArea;

  @Prop({ type: [String], default: [] })
  imageUrls?: string[];

  @Prop({ type: [ProductColor], default: [] })
  availableColors?: ProductColor[];

  @Prop({ type: [ProductSize], default: [] })
  availableSizes?: ProductSize[];

  @Prop()
  sizeGuide?: string;

  @Prop({ type: [Rating] })
  rating?: Rating[];

  @Prop({  })
  measurement?: string;

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