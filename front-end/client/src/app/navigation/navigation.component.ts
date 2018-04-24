import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'stark-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    public imgSrc: string = '../../assets/hover-logo.png';

    
    
    constructor(private router: Router, private authService: AuthService, private jwtService: JwtHelperService ) { }
    
    private loggedUser: string = this.authService.userName();

    ngOnInit() {
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
