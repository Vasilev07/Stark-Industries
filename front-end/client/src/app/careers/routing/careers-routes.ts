import { Routes } from '@angular/router';

import { IsAuthenticatedGuard } from '../../core/guards/is.authenticated.guard';
import { CareersResolver } from '../../core/resolvers/careers.resolver';
import { CareersComponent } from '../careers.component';
import { JobApplicationComponent } from '../job-application/job-application.component';
import { JobDetailsComponent } from '../job-details/job-details.component';

export const ROUTES: Routes = [
  { path: '', component: CareersComponent, pathMatch: 'full', resolve: {jobs: CareersResolver} },
  { path: 'jobDetails/:id', component: JobDetailsComponent },
  { path: 'jobDetails/:id/apply', component: JobApplicationComponent, canActivate: [IsAuthenticatedGuard] },
];
