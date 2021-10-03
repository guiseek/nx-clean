import { Observable } from 'rxjs';

export abstract class HttpService {
  abstract get<T>(url: string): Observable<T>;
  abstract post<T, R = unknown>(url: string, value: T): Observable<R>;
  abstract pur<T, R = unknown>(url: string, value: T): Observable<R>;
  abstract delete<R = unknown>(url: string): Observable<R>;
  abstract patch<R = unknown>(url: string): Observable<R>;
}
