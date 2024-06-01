import { Repository } from 'typeorm';
import { Product } from '../database/models/Product';
import AppDataSource from '../data-source';
import { resp, respM } from '../utils/resp';
import { IProduct } from '../interfaces/IProduct';
import schema from '../middlewares/validation';
import ProviderService from './provider.service';

class ProductService {

    private productService: Repository<Product>;
    private providerService = new ProviderService();

    constructor() {
        this.productService = AppDataSource.getRepository(Product);
    }

    async get() {
       const result = await this.productService.find({
            relations: {
                provider: true
            }
       });
       return resp(200, result);
    }

    async getById(id: number) {
        const result = await this.productService.findOneBy({ id });
        if(!result) return respM(404, 'Product not found!')

        return resp(200, result);
    }

    async create(product: IProduct) {
        const { error } = schema.product.validate(product);
        if(error) return respM(422, error.message);

        const provider = await this.providerService.getById(product.providerId);
        if(provider.status == 404) return respM(404, 'Provider not found!');

        await this.productService.save({
            ...product,
            provider: provider.message!
        });
        return respM(201, 'Product created!');
    }

    async delete(id: number) {
        const result = await this.getById(id);

        if(result.status != 404) {
            await this.productService.delete(id);
            result.status = 204;
        }

        return respM(result.status, result.message);
    }

}

export default ProductService;