import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";



@Injectable()
export class PaystackService {
  private readonly baseUrl: string;
  private readonly secretKey: string;
  private readonly secretHash: string;

  private readonly headers: any;
  constructor( private configService: ConfigService,){
    this.baseUrl = "";
    this.secretKey = this.configService.get<string>("FLUTTERWAVE_SECRET_KEY");
    this.secretHash = this.configService.get<string>("FLUTTERWAVEEncryptionKey");
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.secretKey}`,
      "Content-Type": "application/json",
    };
  }

  async createPaymentLink(){

  }

  async verifyPaymentLink(){

  }
}