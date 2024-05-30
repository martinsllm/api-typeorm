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

    async getById(id: number) {
        const result = await this.providerService.findOneBy({ id });
        if(!result) return respM(404, 'Provider not found!')

        return resp(200, result);
    }

    async create(provider: IProvider) {
        const { error } = schema.provider.validate(provider);
        if(error) return respM(422, error.message);

        await this.providerService.save(provider);
        return respM(201, 'Provider created!');
    } 

    async update(provider: IProvider, id: number) {
        const { error } = schema.provider.validate(provider);
        if(error) return respM(422, error.message);

        const result = await this.getById(id);

        if(result.status != 404) {
            await this.providerService.update(id, provider);
            result.status = 204;
        }
       
        return resp(result.status, result.message);
    } 

    async delete(id: number) {
        const result = await this.getById(id);

        if(result.status != 404) {
            await this.providerService.delete(id);
            result.status = 204;
        }
       
        return resp(result.status, result.message);
    }

}

export default ProviderService;