
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenderEnum } from '@app/enum';

export type CategoriesDoc = CategoriesModel & Document;

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

@Schema()
export class CategoriesModel {
  @Prop({ required: true, })
  name: string;

  @Prop()
  type: string;

  @Prop({ required: false })
  image?: string;


  @Prop({ type: [Mockups] })
  mockups?: Mockups[];

  @Prop({ type: [DesignArea] })
  designAreas?: DesignArea[];

  @Prop({ enum: GenderEnum, default: GenderEnum.UNISEX })
  gender?: string;


}

export const CategoriesSchema = SchemaFactory.createForClass(CategoriesModel);