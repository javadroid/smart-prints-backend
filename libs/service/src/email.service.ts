import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
export interface AuthNotificationData {
  userID: string;
  email: string;
  fullname?: string;
  eventType: "login" | "register" | "password_change" | "kyc_update" | "otp";
  eventDetails?: any;
}
interface SendMailInterface {
  to: string;
  from?: string;
  subject: string;
  text?: string;
  html?: string;
}

@Injectable()
export class SendMailService {
  constructor(private mailService: MailerService) {}

  async sendMail({ from, to, subject, html, text }: SendMailInterface) {
    console.log({from, to, subject, html, text})
    const data = {
      from: from || 'smarts@smartprints.ng',
      to,
      subject,
      text,
      html,
    };
    try {
      this.mailService.sendMail(data).then(()=>{
        console.log('Email sent');
      }).catch((e) => {
        console.log('Email failed');
      });
    } catch (error) {}
  }


   private getEmailSubject(eventType: string): string {
    const subjects = {
      login: "Login Alert - Your Account Was Accessed",
      register: "Welcome! Your Account Has Been Created",
      password_change: "Password Changed Successfully",
      otp: "Your OTP Code",
    };
    return subjects[eventType] || "Account Activity Alert";
  }

  private generateEmailContent(data: AuthNotificationData): string {
    const { eventType, fullname, eventDetails } = data;
    const subject = this.getEmailSubject(eventType);
    let content = `
      <p>Hello ${fullname || "User"},</p>
      <p>Your ${subject}.</p>
    `;
    if (eventDetails && subject ) {
      content += `<p>Details: ${JSON.stringify(eventDetails)}</p>`;
    }
    return content;
  }
 
}
