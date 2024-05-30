import { Router } from 'express';
import ProviderController from '../controllers/provider.controller';

const control = new ProviderController();

const providerRouter = Router();

providerRouter.get('/', control.get.bind(control));
providerRouter.post('/', control.create.bind(control));

export default providerRouter;