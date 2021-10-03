import { HttpService } from '@nx-clean/core';
import { Injectable } from '@nx-clean/core';
import { AjaxRequest } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type HttpConfig =
  | string
  | (AjaxRequest & {
    method?: HttpMethod;
  });


@Injectable()
export class HttpDataService implements HttpService {

  get<T = unknown>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'GET')).pipe(
      map((response) => response.response as T)
    );
  }

  post<T = unknown>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'POST')).pipe(
      map((response) => response.response as T)
    );
  }

  pur<T = unknown>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'PUT')).pipe(
      map((response) => response.response as T)
    );
  }

  patch<T = unknown>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'PATCH')).pipe(
      map((response) => response.response as T)
    );
  }

  delete<T = unknown>(input: HttpConfig) {
    return ajax(this._getConfig(input, 'DELETE')).pipe(
      map((response) => response.response as T)
    );
  }

  private _getConfig(input: HttpConfig, method: HttpMethod) {
    return typeof input === 'string'
      ? { url: input, method }
      : { ...input, method };
  }
}
