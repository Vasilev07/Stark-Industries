import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { AccessToken } from '../models/core/accessToken';
import { Roles } from '../models/roles.enum';
import { LoggedUserModel } from '../models/users/loggedUserModel';
import { UserLoginModel } from '../models/users/userLoginModel';
import { UserRegisterModel } from '../models/users/userRegisterModel';
import { AppConfig } from './../config/app.config';

@Injectable()
export class AuthService {

    public loginDone: Observable<boolean>;

    public userLoggedDone: Observable<LoggedUserModel>;
    private loginEvent: BehaviorSubject<boolean>;

    private userLoggedEvent: BehaviorSubject<LoggedUserModel>;

    constructor(private appConfig: AppConfig, private http: HttpClient, private jwtService: JwtHelperService, private router: Router) {

        this.loginEvent = new BehaviorSubject<boolean>(this.isAuthenticated());
        this.loginDone = this.loginEvent.asObservable();

        this.userLoggedEvent = new BehaviorSubject<LoggedUserModel>(this.getUserName());
        this.userLoggedDone = this.userLoggedEvent.asObservable();

    }

    public loginEventFunction(value: boolean): void {
        this.loginEvent.next(value);
    }

    public userLoggedEventFunction(value: LoggedUserModel): void {
        this.userLoggedEvent.next(value);
    }

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
        const authenticated = this.isAuthenticated();
        if (authenticated) {
            const token = this.jwtService.tokenGetter();
            const decoded = this.jwtService.decodeToken(token);
            let admin = false;
            if (decoded.role >= Roles.admin) {
                admin = true;
            }
            return admin;
        }
        return false;
    }

    public logout(): void {
        this.loginEventFunction(false);
        this.userLoggedEventFunction(null);
        localStorage.removeItem('access_token');
    }

    public getUserName(): LoggedUserModel {
        const token = this.jwtService.tokenGetter();
        if (token) {
            const decodedToken = this.jwtService.decodeToken(token);
            const userName = decodedToken.userName;
            const firstName = decodedToken.firstName;
            const lastName = decodedToken.lastName;
            const email = decodedToken.email;
            const loggedUserInfo = {
                userName,
                firstName,
                lastName,
                email,
            };
            return loggedUserInfo;
        }
        return null;
    }

    public getUserId(): number {
        const token = localStorage.getItem('access_token');
        if (token) {
            const decodedToken = this.jwtService.decodeToken(token);
            return decodedToken.sub;
        }
        return null;
    }

}
