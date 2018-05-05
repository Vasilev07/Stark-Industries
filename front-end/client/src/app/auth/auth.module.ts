import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatModuleModule } from '../shared/mat.module.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AuthRoutingModule } from './routing/auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatModuleModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule { }
