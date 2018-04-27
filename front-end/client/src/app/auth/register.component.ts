import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../core/auth.service';
import { PatternValidatorService } from '../core/pattern.validator.service';
import { UserRegisterModel } from '../models/users/userRegisterModel';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registrationForm: FormGroup;

    passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

    constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            userName: '',
            firstName: '',
            lastName: '',
            email: ['', [Validators.maxLength(1024)]],
            password: ['', [Validators.maxLength(256)]],
            confirmPassword: ['', [Validators.required]],
        }
            // {
            //   validator: PasswordValidatorDirective.MatchPassword
            // }
        );
    }

    public get email() {
        return this.registrationForm.get('email');
    }

    public get password() {
        return this.registrationForm.get('password');
    }

    private register(user: UserRegisterModel): void {
        console.log(user);
        console.log(this.registrationForm);
        this.authService.register(this.registrationForm.value).subscribe((data) => {
            localStorage.setItem('access_token', data.token);
            this.toastr.success(`Success! Welcome to Stark Industries ${user.firstName} ${user.lastName}`)
        });
    }
    // passwordMatchValidator(g: FormGroup) {
    //     return g.get('password').value === g.get('passwordConfirm').value
    //         ? null : { 'mismatch': true };
    // }
}
