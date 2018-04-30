import { Routes } from '@angular/router';

import { AdminContactComponent } from '../admin-contact/admin-contact.component';
import { AdminFormComponent } from '../admin-contact/admin-form/admin-form.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';

export const ROUTES: Routes = [
  { path: 'users', component: AdminUsersComponent},
  { path: 'contacts', component: AdminContactComponent},
  { path: 'contacts/form', component: AdminFormComponent},
  { path: 'contacts/form/:id', component: AdminFormComponent},
];
