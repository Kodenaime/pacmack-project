import { z } from 'zod';

export const memberRegistrationSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  middleName: z.string().trim().max(100).optional(),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z.string().trim().email('Invalid email address').toLowerCase(),
  whatsapp: z.string().trim().min(1, 'WhatsApp number is required').max(30),
  ageBracket: z.string().trim().min(1, 'Age bracket is required'),
  sex: z.enum(['Male', 'Female']),
  passportCountry: z.string().trim().min(1, 'Passport country is required'),
  countryOfResidence: z.string().trim().min(1, 'Country of residence is required'),
  currentEngagement: z.string().trim().min(1, 'Current engagement is required'),
  category: z.enum(['MK/TCK', 'Parent', 'Member Care Professional', 'Mission Leader']),
  joinCommunityArm: z.string().trim().min(1, 'Community arm is required'),
  reasonForJoining: z.string().trim().min(1, 'Reason for joining is required').max(2000),
});

export type MemberRegistrationInput = z.infer<typeof memberRegistrationSchema>;
