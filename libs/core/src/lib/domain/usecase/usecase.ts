import { Observable } from 'rxjs';

export interface UseCase<Request, Response> {
  execute(request?: Request): Observable<Response> | Response;
}
