import { Resend } from 'resend';
import { env } from '../config/env';
import { logger } from '../config/logger';
import Member from '../models/Member';
import { ConflictError } from '../utils/AppError';
import type { MemberRegistrationInput } from '../validators/member';

const resend = new Resend(env.RESEND_API_KEY);

export async function registerMember(input: MemberRegistrationInput) {
  // Check for duplicate email
  const existing = await Member.findOne({ email: input.email });
  if (existing) {
    throw new ConflictError('A member with this email already exists');
  }

  const member = await Member.create({
    ...input,
    status: 'Pending',
  });

  // Fire-and-forget welcome email
  resend.emails
    .send({
      from: 'PACMACK <community@pacmack.com>',
      to: [input.email],
      subject: 'Welcome to the PACMACK Community!',
      html: `<h1>Welcome ${input.firstName}!</h1>
             <p>Your application is under review.</p>
             <p>We're excited to have you join us.</p>
             <p>— The PACMACK Team</p>`,
    })
    .catch((err) => logger.warn({ err }, 'Failed to send welcome email'));

  return member;
}

export async function getMembers(filters?: { status?: string; category?: string }) {
  const query: Record<string, string> = {};
  if (filters?.status) query.status = filters.status;
  if (filters?.category) query.category = filters.category;

  return Member.find(query).sort({ createdAt: -1 }).lean();
}
