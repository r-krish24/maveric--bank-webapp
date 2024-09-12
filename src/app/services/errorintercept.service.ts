import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
declare let alertify:any
@Injectable({
  providedIn: 'root'
})
export class ErrorinterceptService implements HttpInterceptor {

  constructor() { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>> {
    return next.handle(request)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';                
               alertify.error(error.error.message);
                return throwError(errorMessage);
            })
        )
} 
}
