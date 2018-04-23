import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'careers', component: CareersComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];
