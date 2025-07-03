import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import posthog from 'posthog-js';

export const AuthInterceptor: (req: HttpRequest<any>, next: HttpHandlerFn) => Observable<HttpEvent<any>> = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  
  const authService = inject(AuthService);
  const tokenService = inject(TokenService);
  const accessToken = tokenService.getAccessToken();
  // Bypass interceptor if the request is flagged to skip auth
  if (req.headers.has('skipInterceptor')) {
    return next(req);
  }

  let authReq = req;
  if (accessToken) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` },
    });
  }

  if (localStorage.getItem('user_data')) {
    const userData: { email: string; uid: string } = JSON.parse(localStorage.getItem('user_data')!);
    posthog.identify(userData.uid, { email: userData.email });
    posthog.capture('$set', { $set: JSON.parse(localStorage.getItem('user_data')!) });
  } else {
    authService.getUser().subscribe({
      next: (resp: any) => {
        posthog.capture('$set', { $set: resp });
        localStorage.setItem('user_data', JSON.stringify(resp));
      },
    });
  }

  return next(authReq).pipe(
    catchError((error: any) => {
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap((newTokens: { access_token: string }) => {
            tokenService.setAccessToken(newTokens.access_token);
            const authReqWithNewToken = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newTokens.access_token}`,
              },
            });
            return next(authReqWithNewToken);
          }),
          catchError((err) => {
            authService.logout();
            return throwError(err);
          })
        );
      }
      return throwError(error);
    })
  );
};
