import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Combination } from './entities/combination.entity';
import { Event } from './entities/event.entity';
import { Organizer } from './entities/organizer.entity';
import { Participant } from './entities/participant.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Organizer, Event, Combination, Participant])
    ]
})
export class DbModule {}
