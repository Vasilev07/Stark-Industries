import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../core/auth.service';
import { UserLoginModel } from '../models/users/userLoginModel';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {

    constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

    private login(user: UserLoginModel): void {
        this.authService.login(user).subscribe((data) => {
            localStorage.setItem('access_token', data.token);
            this.toastr.success(`${user.userName} registered!`);
            this.router.navigate(['/home']);
    },
        (err: HttpErrorResponse)=> {
            if (err.status === 401) {
                this.toastr.error(err.error.err);
            }
        });
    }

}
