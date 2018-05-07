import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../core/auth.service';
import { TokenService } from '../core/token.service';
import { UserLoginModel } from '../models/users/userLoginModel';
import { animations } from '../shared/animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [animations.routerTopAnimation],
    host: { '[@routerTopAnimation]': ''},
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public returnUrl: string;

    public rememberMe: boolean;
    private errorCode: number;

    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private tokenSetter: TokenService,
    ) { }

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    private login(user: UserLoginModel): void {
        this.route.queryParamMap.subscribe((param) => {
            this.returnUrl = param.get('returnURL');
        });
        this.authService.login(user).subscribe(
            (res) => {
                if (this.rememberMe) {
                    this.tokenSetter.setTokenToLocalStorage(res.token);
                } else {
                    this.tokenSetter.setTokenToSessionStorage(res.token);
                }
                this.authService.loginEventFunction(true);
                const loggedUserInfo = this.authService.getUserName();
                this.authService.userLoggedEventFunction(loggedUserInfo);
                this.toastr.success(`${user.userName} logged in!`);
                if (this.returnUrl) {
                    this.router.navigate([`${this.returnUrl}`]);
                } else {
                    this.router.navigate(['/home']);
                }
            },
            (err: HttpErrorResponse) => {
                if (err.status === this.errorCode) {
                    this.toastr.error(err.error.err);
                }
            });
    }

}
