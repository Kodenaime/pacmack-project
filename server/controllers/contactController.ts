import { Request, Response } from 'express';
import { Resend } from 'resend';
import Contacts from '../models/Contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Save to MongoDB
    const contactMessage = await Contacts.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim(),
      message: message.trim()
    });

    // Send Notification Email to Admin
    await resend.emails.send({
      from: 'system@pacmack.com',
      to: [process.env.ADMIN_EMAIL || ''],
      subject: `New Message from ${firstName} ${lastName}`,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};