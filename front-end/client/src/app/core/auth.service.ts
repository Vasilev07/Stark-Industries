import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';

import { AccessToken } from '../models/core/accessToken';
import { UserLoginModel } from '../models/users/userLoginModel';
import { UserRegisterModel } from '../models/users/userRegisterModel';
import { AppConfig } from './../config/app.config';

@Injectable()
export class AuthService {
    constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService, private router: Router) { }
    public register(user: UserRegisterModel): Observable<AccessToken> {
        return this.http.post<AccessToken>(`${this.appConfig.apiUrl}/register`, user);
    }

    public login(user: UserLoginModel): Observable<AccessToken> {
        return this.http.post<AccessToken>(`${this.appConfig.apiUrl}/login`, user);
    }

    public isAuthenticated(): boolean {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);
        return !!token && !this.jwtService.isTokenExpired(token) && decoded.iss === this.appConfig.jwt_issuer;
    }

    public isAdmin(): boolean {
        const token = this.jwtService.tokenGetter();
        const decoded = this.jwtService.decodeToken(token);

        return decoded.roleId >= 2;
    }

    public logout(): void {
        localStorage.removeItem('access_token');
    }

<<<<<<< HEAD
    // public userName(): string {
    //    const token = localStorage.getItem('access_token');
    //    const decodedToken = this.jwtService.decodeToken(token);
    //    const email = decodedToken.email;
    //    console.log(email);
    //     return email;
    // } 
=======
    public userName(): string {
        const token = localStorage.getItem('access_token');
        const decodedToken = this.jwtService.decodeToken(token);
        const email = decodedToken.email;
        return email;
    }
>>>>>>> 4c0793027f6454e5bc08e8a0c55493329e67bc3c
}
