import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';

class UserController {

    private userService = new UserService();

    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.userService.get();
            return res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.userService.create(req.body);
            return res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

}

export default UserController;