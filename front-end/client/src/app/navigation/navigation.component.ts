import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'stark-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

    public loggedUser: object;
    public firstName: string;
    public lastName: string;
    public imgSrc: string = '../../assets/hover-logo.png';

    public authenticated: boolean = this.isAuth();

    constructor(private router: Router, private authService: AuthService, private jwtService: JwtHelperService ) { }
    
    // private loggedUser: string = this.authService.userName();

    public ngOnInit(): void {
        const authenticated = this.isAuth();
        if (authenticated) {
            this.loggedUser = this.authService.userName();
        }
    }

    public isAuth(): boolean {
        return this.authService.isAuthenticated();
    }
    public onMouseOver(): void {
        this.imgSrc = '../../assets/hover-logo.png';
    }

    public onMouseOut(): void {
        this.imgSrc = '../../assets/logo.png';
    }

    public logout(): void {
        localStorage.removeItem('access_token');
        this.router.navigate(['/']);
    }
}
