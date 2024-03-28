import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EventProperties {
  @Field({ nullable: true })
  mag?: number;
  @Field({ nullable: true })
  place?: string;
  @Field({ nullable: true })
  time?: number;
  @Field({ nullable: true })
  updated?: number;
  @Field({ nullable: true })
  tz?: string;
  @Field({ nullable: true })
  url?: string;
  @Field({ nullable: true })
  detail?: string;
  @Field({ nullable: true })
  felt?: string;
  @Field({ nullable: true })
  cdi?: string;
  @Field({ nullable: true })
  mmi?: string;
  @Field({ nullable: true })
  alert?: string;
  @Field({ nullable: true })
  status?: string;
  @Field({ nullable: true })
  tsunami?: number;
  @Field({ nullable: true })
  sig?: number;
  @Field({ nullable: true })
  net?: string;
  @Field({ nullable: true })
  code?: string;
  @Field({ nullable: true })
  ids?: string;
  @Field({ nullable: true })
  sources?: string;
  @Field({ nullable: true })
  types?: string;
  @Field({ nullable: true })
  nst?: number;
  @Field({ nullable: true })
  dmin?: number;
  @Field({ nullable: true })
  rms?: number;
  @Field({ nullable: true })
  gap?: number;
  @Field({ nullable: true })
  magType?: string;
  @Field({ nullable: true })
  type?: string;
  @Field({ nullable: true })
  title?: string;
}

@ObjectType()
export class EventGeometry {
  @Field((type) => String)
  type: string;

  @Field((type) => [Float])
  coordinates: number[];
}
@ObjectType()
export class Event {
  @Field((type) => String)
  type: string;

  @Field((type) => EventProperties)
  properties: EventProperties;

  @Field((type) => EventGeometry)
  geometry: EventGeometry;

  @Field((type) => String)
  id: string;
}
