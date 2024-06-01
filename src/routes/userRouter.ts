import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { verifyToken } from '../middlewares/jwt';

const control = new UserController();

const userRouter = Router();

userRouter.get('/', verifyToken, control.get.bind(control));
userRouter.post('/', control.create.bind(control));
userRouter.post('/login', control.login.bind(control));

export default userRouter;