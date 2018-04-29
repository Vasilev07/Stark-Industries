import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './routing/careers-routing.module';
import { MatModuleModule } from '../shared/mat.module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CareersViewComponent } from './careers-view.component';

@NgModule({
  imports: [
    CommonModule,
    CareersRoutingModule,
    MatModuleModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [CareersComponent, JobDetailsComponent, CareersViewComponent]
})
export class CareersModule { }
