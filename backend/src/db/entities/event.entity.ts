import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Combination } from "./combination.entity";
import { Organizer } from "./organizer.entity";
import { Participant } from "./participant.entity";

@Entity()
export class Event {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true})
    time: Date;

    @ManyToOne(type => Organizer, organizer => organizer.events)
    organizer: Organizer;

    @OneToMany(type => Combination, combination => combination.event)
    combinations: Combination[];

    @OneToMany(type => Participant, participant => participant.event)
    participants: Participant[];

}
