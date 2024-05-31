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
       const result = await this.productService.find();
       return resp(200, result);
    }

    async create(product: IProduct) {
        const { error } = schema.product.validate(product);
        if(error) return respM(422, error.message);

        const provider = await this.providerService.getById(product.providerId)
        if(provider.status == 404) return respM(404, 'Provider not found!')

        await this.productService.save({
            ...product,
            provider: provider.message!
        });
        return respM(201, 'Product created!');
    }

}

export default ProductService;