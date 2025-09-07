
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductTypeDoc = ProductTypeModel & Document;

@Schema()
export class ProductTypeModel {
  @Prop({ required: true, unique: true })
  name: string;


}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductTypeModel);