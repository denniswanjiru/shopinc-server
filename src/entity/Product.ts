import { Entity, Column, ManyToOne } from "typeorm";

import BaseEntity from "../utils/BaseEntity";
import { User } from './User';

@Entity()
export default class Product extends BaseEntity {
  @Column()
  name: string

  @Column({ type: 'float' })
  price: number

  @Column({ type: 'text' })
  description: string

  @Column()
  archieved: boolean

  @ManyToOne(type => User, user => user.products)
  user: User;
}
