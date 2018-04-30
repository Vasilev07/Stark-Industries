import { Routes } from '@angular/router';

import { CareersComponent } from '../careers.component';
import { JobDetailsComponent } from '../job-details/job-details.component';

export const ROUTES: Routes = [
  { path: '', component: CareersComponent, pathMatch: 'full' },
  { path: 'jobDetails/:id', component: JobDetailsComponent },
];
