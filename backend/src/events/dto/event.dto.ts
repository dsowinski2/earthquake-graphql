class EventPropertiesDto {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: string;
  url: string;
  detail: string;
  felt: string;
  cdi: string;
  mmi: string;
  alert: string;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: string;
  title: string;
}

class EventGeometryDto {
  type: string;
  coordinates: number[];
}

export class EventDto {
  type: string;
  properties: EventPropertiesDto;
  geometry: EventGeometryDto;
  id: string;
}
