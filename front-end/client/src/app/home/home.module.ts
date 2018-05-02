import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib';
import { FacebookModule } from 'ngx-facebook';

import { MatModuleModule } from '../shared/mat.module.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
    Ng4TwitterTimelineModule,
    FacebookModule.forRoot(),
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
