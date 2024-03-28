import { format } from 'date-fns';
// import { HttpMethods } from "./constants";
import { BaseHttpError } from './exceptions';
import { Event, RequestProps, HttpMethods } from './types';

const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1';

export class ApiClient {
  getHeaders(props: RequestProps): HeadersInit {
    const headers: { [key: string]: string } = {
      Accept: 'application/json',
    };
    if (props.data) {
      headers['Content-Type'] = 'application/json';
    }

    return headers;
  }
  getUrl(props: RequestProps): string {
    const url = `${BASE_URL}${props.path}`;
    return props.queryParams
      ? url + `?${new URLSearchParams(props.queryParams).toString()}`
      : url;
  }

  async raiseForStatus(response: Response) {
    if (response.status >= 400) {
      throw new BaseHttpError();
    }
  }

  async request<ResponseType>(props: RequestProps): Promise<ResponseType> {
    const options: RequestInit = {
      headers: this.getHeaders(props),
      method: props.method,
    };
    if (props.data) {
      options.body = JSON.stringify(props.data);
    }
    const url = this.getUrl(props);
    const response = await fetch(url, options);
    await this.raiseForStatus(response);
    const response_data = await response.json();
    return response_data;
  }
  async getEvents(startDate: Date, endDate: Date): Promise<Event[]> {
    const startDateStr = format(startDate, 'yyyy-MM-dd');
    const endDateStr = format(endDate, 'yyyy-MM-dd');
    const path = '/query';
    const queryParams = {
      format: 'geojson',
      starttime: startDateStr,
      endtime: endDateStr,
    };
    return this.request<Event[]>({
      path: path,
      method: HttpMethods.GET,
      queryParams: queryParams,
    });
  }
}
