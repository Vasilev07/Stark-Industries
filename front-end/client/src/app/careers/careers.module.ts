import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatModuleModule } from '../shared/mat.module.module';
import { CareersViewComponent } from './careers-view.component';
import { CareersComponent } from './careers.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CareersRoutingModule } from './routing/careers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CareersRoutingModule,
    MatModuleModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CareersComponent, JobDetailsComponent, CareersViewComponent, JobApplicationComponent]
})
export class CareersModule { }
