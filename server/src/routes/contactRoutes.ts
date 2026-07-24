import { Router } from 'express';
import { submitContact } from '../controllers/contactController';
import { validate } from '../middleware/validate';
import { contactFormSchema } from '../validators/contact';

const router = Router();

router.post('/', validate(contactFormSchema), submitContact);

export default router;
