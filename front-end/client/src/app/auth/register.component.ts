import {
  Component,
  OnInit
} from '@angular/core';
import {
  ToastrService
} from 'ngx-toastr';

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
import {
  PasswordValidatorDirective
} from '../shared/password-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";

  constructor(private authService: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: '',
      firstName: '',
      lastName: '',
      email: ['', [Validators.pattern(this.emailPattern), Validators.maxLength(1024)]],
      password: ['', [Validators.pattern(this.passwordPattern), Validators.maxLength(256)]],
      confirmPassword: ['',Validators.required, PasswordValidatorDirective],
    }
    // {
    //   validator: PasswordValidatorDirective.MatchPassword
    // }
  );
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  private register(user: UserRegisterModel): void {
    console.log(user);
    this.authService.register(this.registrationForm.value).subscribe((data) => {
      localStorage.setItem('access_token', data.token);
      this.toastr.success(`Success! Welcome to Stark Industries ${user.firstName} ${user.lastName}`)
    });
  }
}
