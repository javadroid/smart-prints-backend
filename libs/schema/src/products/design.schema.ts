 

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DesignDoc = HydratedDocument<DesignModel>;

@Schema({ timestamps: true })
export class DesignModel {
  @Prop({  })
  id: string;

  @Prop({ ref: 'UserModel' })
  userID: string;

  @Prop({ })
  name: string;

  @Prop({  })
  url: string;

}

export const DesignSchema = SchemaFactory.createForClass(DesignModel);