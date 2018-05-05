import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from '../core/auth.service';
import { LoggedUserModel } from '../models/users/loggedUserModel';

@Component({
    selector: 'stark-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
    public adminNavVisible: boolean = false;
    public loggedUser: LoggedUserModel;
    public firstName: string;
    public lastName: string;
    public imgSrc: string = '../../assets/hover-logo.png';

    public authenticated: boolean;

    constructor(private router: Router, private authService: AuthService, private jwtService: JwtHelperService) { }

    // private loggedUser: string = this.authService.userName();

    public ngOnInit(): void {
        this.authService.loginDone.subscribe((isLogged) => this.authenticated = isLogged);
        this.authService.userLoggedDone.subscribe((user) => this.loggedUser = user);
        // if (authenticated) {
        //     this.loggedUser = this.authService.getUserName();
        // }
    }
    public toggleAdminNav(): void {
        this.adminNavVisible = !this.adminNavVisible;
    }
    public isAuth(): boolean {
        return this.authService.isAuthenticated();
    }
    public isAdmin(): boolean {
        return this.authService.isAdmin();
    }
    public onMouseOver(): void {
        this.imgSrc = '../../assets/hover-logo.png';
    }

    public onMouseOut(): void {
        this.imgSrc = '../../assets/logo.png';
    }

    public logout(): void {
        this.authService.logout();
        this.router.navigate(['/']);
    }

    // public ngDoCheck(): void {
    //     const authenticated = this.isAuth();
    //     if (authenticated) {
    //         this.loggedUser = this.authService.getUserName();
    //     }
    // }
}
