import { Router } from 'express';
import ProviderController from '../controllers/provider.controller';

const control = new ProviderController();

const providerRouter = Router();

providerRouter.get('/', control.get.bind(control));
providerRouter.get('/:id', control.getById.bind(control));
providerRouter.post('/', control.create.bind(control));
providerRouter.put('/:id', control.update.bind(control));
providerRouter.delete('/:id', control.delete.bind(control));

export default providerRouter;