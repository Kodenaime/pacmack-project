import { Router } from 'express';
import { joinCommunity, listMembers, exportMembers } from '../controllers/memberController';
import { validate } from '../middleware/validate';
import { memberRegistrationSchema } from '../validators/member';
import { adminAuth } from '../middleware/auth';

const router = Router();

router.post('/join', validate(memberRegistrationSchema), joinCommunity);
router.get('/members', adminAuth, listMembers);
router.get('/export/members', adminAuth, exportMembers);

export default router;
