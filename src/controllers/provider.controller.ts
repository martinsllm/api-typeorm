import { Request, Response, NextFunction } from 'express';
import ProviderService from '../services/provider.service';

class ProviderController {

    private providerService = new ProviderService();

    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.providerService.get();
            return res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
           const { status, message } = await this.providerService.create(req.body);
           return res.status(status).json(message);
        } catch (error) {
            next(error);
        } 
    }

}

export default ProviderController;

