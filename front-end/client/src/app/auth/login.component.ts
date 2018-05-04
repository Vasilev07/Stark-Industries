import {
  HttpErrorResponse
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
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
  UserLoginModel
} from '../models/users/userLoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authService: AuthService,
    private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  private login(user: UserLoginModel): void {
    this.authService.login(user).subscribe(
      (res) => {
          console.log(res);
        localStorage.setItem('access_token', res.token);
        this.toastr.success(`${user.userName} logged in!`);
        this.router.navigate(['/home']);
      },
      (err: HttpErrorResponse) => {
          console.log(err);
        if (err.status === 401) {
          this.toastr.error(err.error.err);
        }
      });
  }

}
