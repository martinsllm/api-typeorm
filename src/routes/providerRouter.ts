import { Router } from 'express';
import ProviderController from '../controllers/provider.controller';
import { verifyToken } from '../middlewares/jwt';

const control = new ProviderController();

const providerRouter = Router();

providerRouter.get('/', verifyToken, control.get.bind(control));
providerRouter.get('/:id', verifyToken, control.getById.bind(control));
providerRouter.post('/', verifyToken, control.create.bind(control));
providerRouter.put('/:id', verifyToken, control.update.bind(control));
providerRouter.delete('/:id', verifyToken, control.delete.bind(control));

export default providerRouter;