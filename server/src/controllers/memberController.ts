import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess } from '../utils/response';
import { registerMember, getMembers } from '../services/memberService';
import { exportMembersToExcel } from '../services/exportService';

export const joinCommunity = asyncHandler(async (req: Request, res: Response) => {
  const member = await registerMember(req.body);
  sendSuccess(res, member, 'Application submitted successfully!', 201);
});

export const listMembers = asyncHandler(async (req: Request, res: Response) => {
  const { status, category } = req.query as { status?: string; category?: string };
  const members = await getMembers({ status, category });
  sendSuccess(res, members);
});

export const exportMembers = asyncHandler(async (req: Request, res: Response) => {
  await exportMembersToExcel(res);
});
