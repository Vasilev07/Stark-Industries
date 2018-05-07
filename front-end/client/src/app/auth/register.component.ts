import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../core/auth.service';
import { TokenService } from '../core/token.service';
import { UserRegisterModel } from '../models/users/userRegisterModel';
import { animations } from '../shared/animations';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    animations: [animations.routerTopAnimation],
    host: { '[@routerTopAnimation]': ''},
})
export class RegisterComponent implements OnInit {
    public emailMaxLength: number = 1024;
    public passwordMaxLength: number = 256;
    private registrationForm: FormGroup;
    private passwordPattern = '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}';

    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router,
        private tokenSettr: TokenService,
    ) { }

    public ngOnInit(): void {
        this.registrationForm = this.formBuilder.group({
            userName: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            lastName: ['', Validators.required],
            email: ['', [Validators.email, Validators.maxLength(this.emailMaxLength)]],
            password: ['', [Validators.required, Validators.maxLength(this.emailMaxLength), Validators.pattern(this.passwordPattern)]],
            confirmPassword: ['', [Validators.required]],
        });
    }

    private register(user: UserRegisterModel): void {
        this.authService.register(this.registrationForm.value).subscribe(
            (data) => {
                this.tokenSettr.setTokenToLocalStorage(data.token);
                this.authService.loginEventFunction(true);
                const loggedUserInfo = this.authService.getUserName();
                this.authService.userLoggedEventFunction(loggedUserInfo);
                this.toastr.success(`Success! Welcome to Stark Industries ${user.firstName} ${user.lastName}`);
                this.router.navigate(['/home']);
            },
            (err: HttpErrorResponse) => {
                this.toastr.error(err.error.err);
            });
    }
}
