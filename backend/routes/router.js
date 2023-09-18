import { Router }  from 'express';
import servicesRouter from './services.js';
import partyRouter from './parties.js';


const router = Router();

router.use('/services', servicesRouter);

router.use('/parties', partyRouter);

export default router;