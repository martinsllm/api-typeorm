import { Repository } from 'typeorm';
import { Provider } from '../database/models/Provider';
import AppDataSource from '../data-source';
import { IProvider } from '../interfaces/IProvider';
import { resp, respM } from '../utils/resp';

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
        await this.providerService.save(provider);
        return respM(201, 'Provider created!');
    } 

}

export default ProviderService;