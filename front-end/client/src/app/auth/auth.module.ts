import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule { }
