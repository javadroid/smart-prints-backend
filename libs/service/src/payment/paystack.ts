import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

@Injectable()
export class PaystackService {
  private readonly baseUrl: string;
  private readonly secretKey: string;
  private readonly secretHash: string;
  private readonly headers: any;

  constructor(private configService: ConfigService) {
    this.baseUrl = "https://api.paystack.co"; // Base URL for Paystack API
    this.secretKey = this.configService.get<string>("PAYSTACK_SECRET_KEY");
    this.secretHash = this.configService.get<string>("PAYSTACK_ENCRYPTION_KEY");
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${this.secretKey}`,
      "Content-Type": "application/json",
    };
  }

  /**
   * Creates a payment link using Paystack's API
   */
  async createPaymentLink(data: {
    amount: number;
    email: string;
    currency?: string;
    callback_url?: string;
    metadata?: any;
  }) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/transaction/initialize`,
        {
          amount: data.amount * 100, // Paystack expects amount in kobo
          email: data.email,
          currency: data.currency || "NGN",
          callback_url: data.callback_url,
          metadata: data.metadata,
        },
        { headers: this.headers }
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error?.response?.data || "Failed to create payment link",
        error?.response?.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * Verifies the status of a payment using Paystack's API
   */
  async verifyPaymentLink(reference: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/transaction/verify/${reference}`,
        { headers: this.headers }
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error?.response?.data || "Failed to verify payment",
        error?.response?.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
