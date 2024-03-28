import { Module } from '@nestjs/common';
import { EventsResolver } from './events.resolver';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  providers: [EventsResolver, EventService],
})
export class DataModule {}
