import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable, switchMap, take } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(readonly service: AccountService) {}

  intercept = (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> =>
    this.service.accountInfo$.pipe(
      take(1),
      switchMap(account => {
        if (account.isLoggedIn) {
          req = req.clone({
            headers: req.headers.set(
              'Authorization',
              'Bearer ' + account.token
            ),
          });
        }
        return next.handle(req);
      })
    );
}
