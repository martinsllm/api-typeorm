import { Router } from 'express';
import providerRouter from './providerRouter';
import productRouter from './productRouter';

const router = Router();

router.use('/provider', providerRouter);
router.use('/product', productRouter);

export default router;

