import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactUsDTO } from '@app/dto';
import { serviceResponse } from '@app/service';
import { ContactUsSqlModel } from '@app/sql-schema';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailerService: MailerService,
    @InjectRepository(ContactUsSqlModel)
    private readonly contactRepository: Repository<ContactUsSqlModel>,
  ) {}

  async contactUs(contactUsDto: ContactUsDTO) {
    const { fullName, email, message } = contactUsDto;

    // Save to database
    const contactMessage = this.contactRepository.create(contactUsDto);
    await this.contactRepository.save(contactMessage);

    // Send email to admin
    try {
      await this.mailerService.sendMail({
        to: process.env.ADMIN_EMAIL || 'admin@smartprints.com', // Replace with actual admin email
        subject: `New Contact Us Message from ${fullName}`,
        html: `
          <h3>New Contact Us Message</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      
      // Optionally send confirmation to user
       await this.mailerService.sendMail({
        to: email,
        subject: `We received your message`,
        html: `
          <h3>Hello ${fullName},</h3>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Best regards,<br/>Smart Prints Team</p>
        `,
      });

    } catch (error) {
      console.error('Error sending email:', error);
      // Even if email fails, we might want to return success or log it properly
    }

    return serviceResponse({
      message: 'Message sent successfully',
      status: true,
      data: contactMessage,
    });
  }

  async findAll() {
    const messages = await this.contactRepository.find({
      order: { createdAt: 'DESC' },
    });

    return serviceResponse({
      message: 'Contact messages retrieved successfully',
      status: true,
      data: messages,
    });
  }
}
