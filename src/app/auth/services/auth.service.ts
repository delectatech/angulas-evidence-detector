import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  login(email: string, password: string): Observable<any> {
    return of({
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzMyOTQ1OS01N2E4LTRlZjMtODdmMS02YjQ1NzI1MTUxYjUiLCJpYXQiOjE3NTE0MTI1MzUsImV4cCI6MTc1MTQxMzQzNX0.MLOQTJVf0fT4_gNLhFAVK4l_X88P68xW2KEKdNybuwI",
      refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzMyOTQ1OS01N2E4LTRlZjMtODdmMS02YjQ1NzI1MTUxYjUiLCJpYXQiOjE3NTE0MTI1MzUsImV4cCI6MTc1NDAwNDUzNX0.BKROwt_Q0f_cMx_2T_vYOwZaw-ckSZRm2qSNEB7sWGU"
    })
    return this.http.post<any>(this.API_URL + '/auth/signin', {
      email,
      password,
    });
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.tokenService.getRefreshToken();
    return this.http.post(`${this.API_URL}/auth/refresh`, {
      refresh_token: refreshToken,
    });
  }

  logout(): void {
    this.tokenService.clearTokens();
    // Navegar al login u otra acción
  }

  getUser(): Observable<{ email: string; uid: string }> {
    return this.http.get<{ email: string; uid: string }>(`${this.API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${this.tokenService.getAccessToken()}`,
        skipInterceptor: 'true',
      },
    });
  }
}
