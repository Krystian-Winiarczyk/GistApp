import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class HeadersInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = "f89d1c96ee4fea29d1f7688c16a75ac7d624e7ff";
    req.headers.set('Accept', 'application/vnd.github.v3+json');
    req.headers.set('Authorization', `token ${token}`);

    const modifiedReq = req.clone({
      headers: req.headers,
    });
    return next.handle(modifiedReq);
  }
}
