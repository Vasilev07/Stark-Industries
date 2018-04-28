import { Routes } from '@angular/router';

import { IsAdminGuard } from './core/guards/is.admin.guard';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [IsAdminGuard] },
];
