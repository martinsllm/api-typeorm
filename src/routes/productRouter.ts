import { Router }  from 'express';
import ProductController from '../controllers/product.controller';
import { verifyToken } from '../middlewares/jwt';

const control = new ProductController();

const productRouter = Router();

productRouter.get('/', verifyToken, control.get.bind(control));
productRouter.post('/', verifyToken, control.create.bind(control));
productRouter.delete('/:id', verifyToken, control.delete.bind(control));

export default productRouter;