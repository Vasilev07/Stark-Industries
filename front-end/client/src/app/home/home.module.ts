import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib';

import { MatModuleModule } from '../shared/mat.module.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
    Ng4TwitterTimelineModule,
    RouterModule,
    MatModuleModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
