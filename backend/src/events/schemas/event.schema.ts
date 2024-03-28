import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class EventProperties {
  @Prop({ required: false })
  mag: number;
  @Prop({ required: false })
  place: string;
  @Prop({ required: false })
  time: number;
  @Prop({ required: false })
  updated: number;
  @Prop({ required: false })
  tz: string;
  @Prop({ required: false })
  url: string;
  @Prop({ required: false })
  detail: string;
  @Prop({ required: false })
  felt: string;
  @Prop({ required: false })
  cdi: string;
  @Prop({ required: false })
  mmi: string;
  @Prop({ required: false })
  alert: string;
  @Prop({ required: false })
  status: string;
  @Prop({ required: false })
  tsunami: number;
  @Prop({ required: false })
  sig: number;
  @Prop({ required: false })
  net: string;
  @Prop({ required: false })
  code: string;
  @Prop({ required: false })
  ids: string;
  @Prop({ required: false })
  sources: string;
  @Prop({ required: false })
  types: string;
  @Prop({ required: false })
  nst: number;
  @Prop({ required: false })
  dmin: number;
  @Prop({ required: false })
  rms: number;
  @Prop({ required: false })
  gap: number;
  @Prop({ required: false })
  magType: string;
  @Prop({ required: false })
  type: string;
  @Prop({ required: false })
  title: string;
}

@Schema({ _id: false })
export class EventGeometry {
  @Prop({ required: false })
  type: string;

  @Prop({ required: false })
  coordinates: number[];
}

@Schema()
export class Event {
  @Prop()
  type: string;

  @Prop()
  properties: EventProperties;

  @Prop()
  geometry: EventGeometry;

  @Prop()
  id: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
