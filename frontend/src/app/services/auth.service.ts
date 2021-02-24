import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
    this.isUserLoggedIn();
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${BASE_URL}/auth/login/`, credentials);
  }

  register(credentials: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Observable<any> {
    return this.http.post(`${BASE_URL}/users/`, credentials);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.isUserLoggedIn();
  }

  isUserLoggedIn(): void {
    this.isLoggedIn = !this.jwtHelper.isTokenExpired();
  }

  tokenSetter(token: string): void {
    return localStorage.setItem('access_token', token);
  }
}
