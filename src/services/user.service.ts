import { Repository } from 'typeorm';
import { User } from '../database/models/User';
import AppDataSource from '../data-source';
import { resp, respM } from '../utils/resp';
import { IUser } from '../interfaces/IUser';
import schema from '../middlewares/validation';
import md5 from 'md5';

class UserService {

    private userService: Repository<User>;

    constructor() {
        this.userService = AppDataSource.getRepository(User);
    }

    async get() {
        const result = await this.userService.find();
        return resp(200, result);
    }

    async create(user: IUser) {
        const { error } = schema.user.validate(user);
        if(error) return respM(422, error.message);

        await this.userService.save({
            ...user,
            password: md5(user.password)
        });

        return respM(201, 'Register completed succesfully!');
    }

}

export default UserService;