// import { HttpMethods } from "./constants";

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
}

export type RequestProps = {
  path: string;
  method: HttpMethods;
  data?: object;
  queryParams?: Record<string, string>;
};

type EventProperties = {
  mag?: number;
  place?: string;
  time?: number;
  updated?: number;
  tz?: string;
  url?: string;
  detail?: string;
  felt?: string;
  cdi?: string;
  mmi?: string;
  alert?: string;
  status?: string;
  tsunami?: number;
  sig?: number;
  net?: string;
  code?: string;
  ids?: string;
  sources?: string;
  types?: string;
  nst?: number;
  dmin?: number;
  rms?: number;
  gap?: number;
  magType?: string;
  type?: string;
  title?: string;
};

type EventGeometry = {
  type: string;
  coordinates: number[];
};

export type Event = {
  type: string;
  properties: EventProperties;
  geometry: EventGeometry;
  id: string;
};
