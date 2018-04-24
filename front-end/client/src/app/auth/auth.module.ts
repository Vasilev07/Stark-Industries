import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AuthRoutingModule } from './routing/auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule { }
