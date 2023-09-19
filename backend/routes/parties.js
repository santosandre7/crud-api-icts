import { Router } from 'express';
import partyController from '../controllers/partyController.js';

const router = Router();

router.post('/', (req, res) => partyController.create(req, res));

router.get('/', (req, res) => partyController.getAll(req, res));

router.get('/:id', (req, res) => partyController.get(req, res));

router.delete('/:id', (req, res) => partyController.delete(req, res));

router.put('/:id', (req, res) => partyController.update(req, res));

export default router;