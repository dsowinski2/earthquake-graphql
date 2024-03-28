import { Args, ArgsType, Field, Int, Query, Resolver } from '@nestjs/graphql';
import { Event } from './models/event.model';
import { EventService } from './event.service';
import { Min, Max } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Field({ nullable: true })
  @Min(0)
  skip: number;

  @Field({ nullable: true })
  @Min(1)
  @Max(50)
  limit: number;
}

@Resolver((of) => Event)
export class EventsResolver {
  constructor(private eventService: EventService) {}

  @Query((returns) => [Event])
  async events(@Args() args: PaginationArgs) {
    const events = await this.eventService.getAll(args.skip, args.limit);
    return events;
  }
}
