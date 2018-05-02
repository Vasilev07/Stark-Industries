import { Routes } from '@angular/router';

import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminFormComponent } from '../admin-contact/admin-form/admin-form.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
import { AdminJobAdsComponent } from '../admin-job-ads/admin-job-ads.component';
import { CreateJobComponent } from '../admin-job-ads/create-job/create-job.component';

export const ROUTES: Routes = [
  { path: 'users', component: AdminUsersComponent},
  { path: 'contacts', component: AdminContactComponent},
  { path: 'contacts/form', component: AdminFormComponent},
  { path: 'contacts/form/:id', component: AdminFormComponent},
  { path: 'careers', component: AdminJobAdsComponent},
  { path: 'careers/create', component: CreateJobComponent},
  { path: 'careers/create/:id', component: CreateJobComponent},
];
