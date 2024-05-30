import { Router } from 'express';
import providerRouter from './providerRouter';

const router = Router();

router.use('/provider', providerRouter);

export default router;

