import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { AuthRoutingModule } from './routing/auth-routing.module';
<<<<<<< HEAD
=======
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
>>>>>>> 373223ee0b0d796ec8fa5ce6468368c3ba160cd2

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule { }
