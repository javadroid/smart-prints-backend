import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BusinessTypeEnum, FarmStatusEnum } from "@app/enum"; // Ensure you import these enums correctly
import { randomInt, randomUUID } from "crypto";

export type FarmDoc =FarmModel & Document;

class Location {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  long: string;

  @Prop({ required: true })
  lat: string;
}

@Schema({ timestamps: true })
export class FarmModel {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Location, required: true })
  location: Location;

  @Prop({ type: [String], required: true })
  producType: string[];

  @Prop({ type: String, enum: BusinessTypeEnum, required: true })
  businessType: string;

  @Prop({ required: true })
  userID: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl?: string;

  @Prop()
  nin?: string;

  @Prop()
  proofOfAddress?: string;

  @Prop()
  cac?: string;

  @Prop({ enum: FarmStatusEnum, default: FarmStatusEnum.PENDING })
  ninStatus?: string;

  @Prop({ enum: FarmStatusEnum, default: FarmStatusEnum.PENDING })
  proofOfAddressStatus?: string;

  @Prop({ enum: FarmStatusEnum, default: FarmStatusEnum.PENDING })
  cacStatus?: string;

  @Prop({ enum: FarmStatusEnum, default: FarmStatusEnum.ACTIVE })
  status?: string;
}

export const FarmSchema = SchemaFactory.createForClass(FarmModel);
FarmSchema.pre<FarmModel>('save', async function (next, error) {
  if (!this.id) {
    this.id = "PDT"+ randomInt(100, 999) + randomUUID().replace(/\D/g, '').substring(0, 3);
  }
  
  next();
});