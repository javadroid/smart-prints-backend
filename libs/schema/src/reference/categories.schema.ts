
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDoc = CategoriesModel & Document;

@Schema()
export class CategoriesModel {
  @Prop({ required: true, unique: true })
  name: string;


}

export const CategoriesSchema = SchemaFactory.createForClass(CategoriesModel);