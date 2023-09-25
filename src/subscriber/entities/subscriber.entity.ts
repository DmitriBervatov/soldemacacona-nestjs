import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dni: string;

  @Column()
  phone: string;

  @Column()
  message: string;

  @Column()
  terms: boolean;

  @Column()
  promotions: string;
}
