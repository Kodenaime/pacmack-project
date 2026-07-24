import { Resend } from 'resend';
import { env } from '../config/env';
import { logger } from '../config/logger';
import Contact from '../models/Contact';
import type { ContactFormInput } from '../validators/contact';

const resend = new Resend(env.RESEND_API_KEY);

export async function createContactMessage(input: ContactFormInput) {
  const contact = await Contact.create({
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    phone: input.phone,
    message: input.message,
  });

  // Fire-and-forget notification email
  if (env.ADMIN_EMAIL) {
    resend.emails
      .send({
        from: 'PACMACK <system@pacmack.com>',
        to: [env.ADMIN_EMAIL],
        subject: `New message from ${input.firstName} ${input.lastName}`,
        html: `<p><strong>From:</strong> ${input.firstName} ${input.lastName} (${input.email})</p>
               <p><strong>Phone:</strong> ${input.phone || 'N/A'}</p>
               <p><strong>Message:</strong></p>
               <p>${input.message.replace(/\n/g, '<br/>')}</p>`,
      })
      .catch((err) => logger.warn({ err }, 'Failed to send admin notification email'));
  }

  return contact;
}
