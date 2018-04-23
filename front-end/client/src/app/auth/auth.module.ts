import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
