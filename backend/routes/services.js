import { Router } from 'express';
import serviceController from '../controllers/serviceController.js';

const router = Router();

router
    .route('/')
    .post((req, res) => serviceController.create(req, res));

router.get('/', (req, res) => serviceController.getAll(req, res));

router.get('/:id', (req, res) => serviceController.get(req, res));

router.delete('/:id', (req, res) => serviceController.delete(req, res));

router.put('/:id', (req, res) => serviceController.update(req, res));


export default router;