import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess } from '../utils/response';
import { createContactMessage } from '../services/contactService';

export const submitContact = asyncHandler(async (req: Request, res: Response) => {
  const contact = await createContactMessage(req.body);
  sendSuccess(res, contact, 'Your message has been sent successfully!', 201);
});
