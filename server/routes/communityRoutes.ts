import { Router } from 'express';
import { joinCommunity } from '../controllers/memberController';

const router = Router();

// This makes the full path: /api/community/join
router.post('/join', joinCommunity);

export default router;