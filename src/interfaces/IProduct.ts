import { Provider } from "../database/models/Provider";

export interface IProduct {
    id?: number, 
    name: string,
    price: number,
    description: string,
    providerId: number
}