import { Entity, Column, OneToMany } from "typeorm";
import BaseEntity from "../utils/BaseEntity";
import Product from "./Product";

enum UserRole {
    ADMIN = 'admin',
    BUYER = 'buyer',
    SELLER = 'seller'
}

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: false })
    verified: boolean

    @Column({ default: 'https://pngimage.net/wp-content/uploads/2018/05/default-user-png-4.png' })
    avatar: string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.BUYER
    })
    role: UserRole;

    @OneToMany(type => Product, product => product.user)
    products: Product[];
}
