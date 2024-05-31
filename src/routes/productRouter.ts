import { Router }  from 'express';
import ProductController from '../controllers/product.controller';

const control = new ProductController();

const productRouter = Router();

productRouter.get('/', control.get.bind(control));
productRouter.post('/', control.create.bind(control));
productRouter.delete('/:id', control.delete.bind(control));

export default productRouter;