import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z.string().trim().email('Invalid email address').toLowerCase(),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(1, 'Message is required').max(5000),
  receiveUpdates: z.boolean().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
