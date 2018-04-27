import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

<<<<<<< HEAD
import { AuthService } from '../core/auth.service';
import { UserRegisterModel } from '../models/users/userRegisterModel';
import { PasswordValidatorDirective } from '../shared/password-validator.directive';
=======
import {
  AuthService
} from '../core/auth.service';
import {
  UserRegisterModel
} from '../models/users/userRegisterModel';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  HttpResponse
} from '@angular/common/http';
import { PatternValidatorService } from '../core/pattern.validator.service';
>>>>>>> 373223ee0b0d796ec8fa5ce6468368c3ba160cd2

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  patternValidationService: any;
  registrationForm: FormGroup;

<<<<<<< HEAD
//   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//   passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
=======
  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
>>>>>>> 373223ee0b0d796ec8fa5ce6468368c3ba160cd2

  constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder, patternValidationService: PatternValidatorService) {}
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: '',
      firstName: '',
      lastName: '',
<<<<<<< HEAD
      email: ['', [ Validators.maxLength(1024)]],
      password: ['', [ Validators.maxLength(256)]],
      confirmPassword: ['', [Validators.required]],
    }
    // {
    //   validator: PasswordValidatorDirective.MatchPassword
    // }
  );
=======
      email: ['', [Validators.email, Validators.maxLength(1024)]],
      passwords: this.formBuilder.group({
        password: ['', [Validators.pattern(this.passwordPattern), Validators.maxLength(256)]],
        confirm_password: ['', [Validators.required]],
    }, {validator: this.passwordMatchValidator}),
    });
>>>>>>> 373223ee0b0d796ec8fa5ce6468368c3ba160cd2
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
   passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : {'mismatch': true};
 }
}
