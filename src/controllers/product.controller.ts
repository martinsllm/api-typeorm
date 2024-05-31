import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/product.service';

class ProductController {

    private productService = new ProductService();

    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.productService.get();
            return res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message } = await this.productService.create(req.body);
            return res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params; 
            const { status, message } = await this.productService.delete(+id);
            return res.status(status).json(message);
        } catch (error) {
            next(error);
        }
    }

}

export default ProductController;