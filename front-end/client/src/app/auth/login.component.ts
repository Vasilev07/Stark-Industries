import { Component } from '@angular/core';

import { UserLoginModel } from '../models/users/userLoginModel';
import { AuthService } from './../core/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {

    constructor(private authService: AuthService) { }

    private login(user: UserLoginModel): void {
        this.authService.login(user).subscribe((x) => localStorage.setItem('access_token', x.token));
    }

}
