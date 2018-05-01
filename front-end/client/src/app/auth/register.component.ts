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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

  constructor(private authService: AuthService, private toastr: ToastrService,
    private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      // userName: '',
      // firstName: '',
      // lastName: '',
      // email: ['', [Validators.maxLength(1024)]],
      password: ['', [Validators.maxLength(256)]],
      confirmPassword: ['', [Validators.required]],
    });

    // console.log(this.registrationForm);
  }

  private register(user: UserRegisterModel): void {
    this.authService.register(this.registrationForm.value).subscribe((data) => {
      localStorage.setItem('access_token', data.token);
      this.toastr.success(`Success! Welcome to Stark Industries ${user.firstName} ${user.lastName}`);
      this.router.navigate(['/home']);
    });
  }
}
