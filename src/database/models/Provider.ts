import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Provider {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @OneToMany(() => Product, (product) => product.provider)
    products: Product[]

}