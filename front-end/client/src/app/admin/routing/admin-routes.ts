import { Routes } from '@angular/router';

import { IsAdminGuard } from '../../core/guards/is.admin.guard';
import { AdminUsersComponent } from '../admin-users/admin-users.component';

export const ROUTES: Routes = [
  { path: 'users', component: AdminUsersComponent},
];
