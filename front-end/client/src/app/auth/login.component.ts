import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth.service';
import { UserLoginModel } from '../models/users/userLoginModel';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private authService: AuthService) { }

    private login(user: UserLoginModel): void {
        this.authService.login(user).subscribe((x) => localStorage.setItem('access_token', x.token));
    }

}
