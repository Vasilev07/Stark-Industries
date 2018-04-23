import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { AppConfig } from './../config/app.config';
import { HttpOptions } from './../models/core/http-options';

@Injectable()
export class AuthService {
  constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService) {}
  public register(user: User, options?: HttpOptions): Observable < object > {
    return this.http.post(`${this.appConfig.apiUrl}/register`, user, options);
  }

  public login(user: User, options?: HttpOptions): Observable < object > {
    return this.http.post(`${this.appConfig.apiUrl}/login`, user, options);
  }

  public isAuthenticated(): boolean {
    const token = this.jwtService.tokenGetter();
    const decoded = this.jwtService.decodeToken(token);
    return !!token && !this.jwtService.isTokenExpired(token) && decoded.iss === this.appConfig.jwt_issuer;
  }

  public logout(): void {
    localStorage.removeItem('access_token');
  }
}
