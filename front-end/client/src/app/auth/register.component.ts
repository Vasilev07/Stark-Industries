import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import {
  Router
} from '@angular/router';
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
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registrationForm: FormGroup;
  private passwordPattern = '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}';

  constructor(private authService: AuthService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.maxLength(1024)]],
      password: ['', [Validators.required, Validators.maxLength(256), Validators.pattern(this.passwordPattern)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  private register(user: UserRegisterModel): void {
    console.log(this.registrationForm.errors);
    this.authService.register(this.registrationForm.value).subscribe(
      (data) => {
        localStorage.setItem('access_token', data.token);
        this.toastr.success(`Success! Welcome to Stark Industries ${user.firstName} ${user.lastName}`);
        this.router.navigate(['/home']);
      }, (err: HttpErrorResponse) => {
        this.toastr.error(err.error.err);
      });
  }
}
