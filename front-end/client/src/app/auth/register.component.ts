import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../core/auth.service';
import { UserRegisterModel } from '../models/users/userRegisterModel';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    constructor(private authService: AuthService, private toastr: ToastrService) { }

    private register(user: UserRegisterModel): void {
        this.authService.register(user).subscribe((data) => {
            localStorage.setItem('access_token', data.token);
            this.toastr.success(`Success! Welcome to Stark Industries ${user.firstName} ${user.lastName}`)
        });
    }
}
