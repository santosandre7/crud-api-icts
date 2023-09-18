import { Router } from 'express';
import partyController from '../controllers/partyController.js';

const router = Router();

router.post('/', (req, res) => partyController.create(req, res));

export default router;