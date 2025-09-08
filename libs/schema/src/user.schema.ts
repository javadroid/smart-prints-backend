import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomInt, randomUUID } from "crypto";
import { HydratedDocument } from "mongoose";
import * as uniqueValidator from "mongoose-unique-validator";
import * as bcrypt from "bcrypt";
import {
  Gender,
  
  
  
} from "@app/enum";
import { UserStatus, UserType } from "@app/enum";
import { Refferal } from "@app/dto";

export type UserDoc = HydratedDocument<UserModel>;

class BankAccount {
  @Prop({  })
  bankName: string;

  @Prop({  })
  accountNumber: string;

  @Prop({  })
  accountName: string;
  @Prop({  })
  bankCode: string;
  @Prop({ })
  accountType: string;

  @Prop({  })
  ACHrouting: string;
  @Prop({  })
 wireRouting: string;
  @Prop({  })
  swiftCode: string;
  @Prop({  })
  currency: string;
  
}

class NextOfKin {

  

  @Prop({  })
  firstName: string;

  @Prop({  })
  lastName: string;

  @Prop({  })
  relationship: string;

  @Prop({ enum: Gender })
  gender: string;

  @Prop({  })
  phoneNumber: string;

  @Prop({  })
  residentialAddress: string;
}

class BankStatement {
  @Prop({  })
  documentUrl: string;

  @Prop({  })
  statementDate: string;

  @Prop({
    
    
  })
  status: string;

  @Prop({ default: Date.now })
  uploadedAt: Date;
}




class Referral {
  @Prop({  })
  refCode: string;

  @Prop({ enum: ["active", "inactive"] })
  status?: string;

  @Prop({  })
  max: number;

  @Prop({ default: 0 })
  amount: number;
}
@Schema({ timestamps: true })
export class UserModel {
  @Prop()
  id: string;
  
  @Prop()
  title?: string;
  @Prop()
  playerId?: string;
  roles: string[];

  @Prop({ type: String, enum: UserType, default: UserType.USER })
  userType: string;

  @Prop()
  username?: string;

  @Prop({enum:UserStatus, default:UserStatus.ACTIVE})
  status?: string;

  @Prop()
  emailStatus?: string;

  @Prop({ unique:true })
  email: string;

  @Prop({  })
  fullname: string;

  @Prop({  })
  firstname: string;

  @Prop({  })
  lastname: string;

  @Prop()
  phone?: string;

  @Prop({  })
  password: string;

  @Prop()
  profileImage?: string;

  @Prop({ default: false })
  isAdmin?: boolean;

  @Prop({ default: false })
  isSuperAdmin?: boolean;

  @Prop()
  dob?: Date;

  @Prop()
  state?: string;

  @Prop()
  country?: string;

  @Prop()
  gender?: string;

  @Prop()
  localGovernmentArea?: string;

  
  
  @Prop({ type: Object })
  socialMediaProfile?: Record<string, string>;

  @Prop()
  residentialAddress?: string;

  @Prop({ type: [BankAccount] })
  bankAccount?: BankAccount[];


  
  @Prop({ type: Referral })
  referral: Referral;

  @Prop()
  refBy: string;

  @Prop()
  refCode: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
UserSchema.plugin(uniqueValidator);

// **Hash Password Before Saving**
UserSchema.pre<UserModel>("save", async function (next) {
  if (this.password) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password || "123456", salt);
  }
  this.id = randomInt(99999) + randomUUID().replace(/\D/g, "").substring(0, 5);

  this.username = this.username || this.email;

  this.referral.refCode =
    this.username.substring(0, 2) +
    randomInt(99) +
    randomUUID().substring(0, 2);
this.refCode= this.referral.refCode;

  this.referral.status = "active";
  next();
});
