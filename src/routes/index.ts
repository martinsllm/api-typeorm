import { Router } from 'express';
import providerRouter from './providerRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';

const router = Router();

router.use('/provider', providerRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);

export default router;

