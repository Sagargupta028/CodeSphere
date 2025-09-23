import {Router} from 'express';
import { contactUs, getAllContacts } from '../controllers/contactController.js';

const router = Router();

router.post("/contactForm", contactUs);
router.get("/all", getAllContacts);

export default router;