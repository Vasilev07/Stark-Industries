import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},

];
