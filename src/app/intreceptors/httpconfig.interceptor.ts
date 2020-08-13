import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', `token ${token}`)});
      request = request.clone({headers: request.headers.set('Accept', 'application/vnd.github.v3+json')});

      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          localStorage.removeItem('token');
          localStorage.removeItem("user");
          this.router.navigate([''], {queryParams: {error: true}});
          return throwError(error);
        })
      );
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
