import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";

@Entity()
export class Combination {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    tested: boolean;

    @Column({ default: false })
    vaccinated: boolean;

    @Column({ default: false })
    recovered: boolean;

    @ManyToOne(type => Event, event => event.combinations)
    event: Event;

}
