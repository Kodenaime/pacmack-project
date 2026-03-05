import { Router, Request, Response } from 'express';
import { exportMembersToExcel } from '../utils/exportMember';
import { adminAuth } from '../middleware/auth';

const router = Router();

// GET /api/export/members
router.get('/members', adminAuth, async (req: Request, res: Response) => {
  try {
    await exportMembersToExcel(res);
  } catch (error) {
    res.status(500).json({ message: "Failed to export data" });
  }
});

export default router;