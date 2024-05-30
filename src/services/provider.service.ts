import { Repository } from 'typeorm';
import { Provider } from '../database/models/Provider';
import AppDataSource from '../data-source';
import { IProvider } from '../interfaces/IProvider';
import { resp, respM } from '../utils/resp';
import schema from '../middlewares/validation';

class ProviderService {

    private providerService: Repository<Provider>;

    constructor() {
        this.providerService = AppDataSource.getRepository(Provider);
    }

    async get() {
       const result = await this.providerService.find();
       return resp(200, result);
    }

    async create(provider: IProvider) {
        const { error } = schema.provider.validate(provider);
        if(error) return respM(422, error.message);

        await this.providerService.save(provider);
        return respM(201, 'Provider created!');
    } 

}

export default ProviderService;