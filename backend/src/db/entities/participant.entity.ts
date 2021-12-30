import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";

@Entity()
export class Participant {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birthday: Date;

    @Column({ nullable: true })
    email: string;

    @ManyToOne(type => Event, event => event.combinations)
    event: Event;

}
