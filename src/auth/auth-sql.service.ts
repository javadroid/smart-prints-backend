import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { UserDTO } from "@app/dto";
import { SendMailService, SmsService, FlutterwaveService } from "@app/service";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserSqlModel } from "@app/sql-schema/user.sql-schema";
import { OtpSqlModel } from "@app/sql-schema/otp.sql-schema";

@Injectable()
export class AuthSqlService {
  constructor(
    private readonly config: ConfigService,
    private sendMailService: SendMailService,
    private smsService: SmsService,
    private flutterwaveService: FlutterwaveService,
    private jwtService: JwtService,
    @InjectRepository(UserSqlModel)
    private readonly userRepository: Repository<UserSqlModel>,
    @InjectRepository(OtpSqlModel)
    private readonly otpRepository: Repository<OtpSqlModel>
  ) {}

  async register(users: Partial<any>): Promise<any> {
    try {
      let checkUserRefId;

      if (users.useRefCode) {
        const user = await this.userRepository.findOne({
          where: { refCode: users.useRefCode },
        });

        if (!user) {
          throw new NotFoundException("Referral code not found");
        }
        users.refBy = user.id.toString();
      }
      users.referral = {
        refBy: users.refBy,
        refCode: "",
        status: "active",
        max: 0,
        amount: 0,
      }; // Initialize referral object
      const user = this.userRepository.create(users);
      const created = await this.userRepository.save(user);

      const data1 = await this.otpRepository.create({
        userID: created._id,
        type: "EmailVerification",
        code: Math.floor(100000 + Math.random() * 900000).toString(), // Generate a 6-digit code
        status: "pending",
        createdAt: new Date(),
      });
      const data = await this.otpRepository.save(data1);
      const message = await this.smsService.generateMessage(data as any);

      this.sendMailService.sendMail({
        to: created.email,
        from: "Smart Prints <smarts@smartprints.ng>",
        subject: "Email Code Verification",
        text: message,
      });

      // this.flutterwaveService.createVirtualAccount({
      //   account_name: created.fullname,
      //   email: created.email,
      //   mobilenumber: created.phone,
      // });

      return {
        message:
          "Registration successful, Please Proceed to Email Verification",
        userID: created,
      };
    } catch (error) {
      throw new NotAcceptableException(error.message);
    }
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      console.log(user);
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        if (user.status === "disabled") {
          throw new UnauthorizedException("User is disabled");
        }
        // if (user.emailStatus !== 'verified') {
        //   throw new UnauthorizedException('Email not verified');
        // }

        return this.getLoginToken(user);
      }
      throw new UnauthorizedException("Invalid Credentials");
    }
    throw new NotFoundException("No User Found");
  }

  getLoginToken(user: any) {
    const payload = {
      sub: user._id,
      username: user.username,
      email: user.email,
    };
    const access_token = this.jwtService.sign(payload, { expiresIn: "30d" });
    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: "30d",
      secret: this.config.get("JWT_SECRET2"),
    });
    return {
      message: "Login successful",
      status: true,
      data: user,
      access_token,
      refresh_token,
    };
  }

  async sendTwoFactorAuthenticationMail(body: any): Promise<any> {
    const user = await this.userRepository.findOne({
      where: [{ id: body.userID }, { email: body.email || body.userID }],
    });
    if (!user) {
      throw new NotFoundException("No User Found");
    }

    const data = await this.otpRepository.save({
      userID: user.id,
      type: body.type,
      code: Math.floor(100000 + Math.random() * 900000).toString(), // Generate a 6-digit code
      status: "pending",
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 3600000), // 1 hour expiration
    });

    const message = await this.smsService.generateMessage(data as any);

    this.sendMailService.sendMail({
      to: user.email,
            from: "Smart Prints <smarts@smartprints.ng>",
      subject: body.type,
      text: message,
    });
    const d = { ...data };
    delete d.code;
    return {
      message: "Code sent",
      data: d,
    };
  }

  async editProfile(body: any, userID: string) {
    delete body.email;
    delete body.id;
    delete body.isAdmin;
    delete body.isSuperAdmin;
    delete body.status;
    delete body.password;
    await this.userRepository.update(userID, body);
    const user = await this.userRepository.findOne({ where: { id: userID } });
    return {
      message: "User profile updated",
      data: user,
    };
  }

  async getProfile(userID: string) {
    const user = await this.userRepository.findOne({ where: { id: userID } });
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return {
      message: "User profile found",
      data: user,
    };
  }

  async forgotPassword(
    token: string,
    code: string,
    newPassword: string
  ): Promise<any> {
    const checkCode = await this.otpRepository.findOne({
      where: { code, status: "pending", type: "PasswordReset" },
    });

    if (!checkCode) {
      throw new NotFoundException("Code not found or expired");
    }

    const user = await this.userRepository.findOne({
      where: { id: checkCode.userID },
    });
    await this.otpRepository.update(checkCode.id, { status: "used" });

    if (!user) {
      throw new NotFoundException("User not found");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await this.userRepository.update(checkCode.userID, {
      password: hashedPassword,
    });
    return {
      message: "Password successfully updated",
    };
  }
}
