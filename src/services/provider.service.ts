import { Repository } from 'typeorm';
import { Provider } from '../database/models/Provider';
import AppDataSource from '../data-source';
import { IProvider } from '../interfaces/IProvider';

class ProviderService {

    private providerService: Repository<Provider>;

    constructor() {
        this.providerService = AppDataSource.getRepository(Provider);
    }

    async get(): Promise<Provider[]> {
       return await this.providerService.find();
    }

    async create(provider: IProvider): Promise<Provider> {
        return await this.providerService.save(provider);
    } 

}

export default ProviderService;