import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatModuleModule } from '../shared/mat.module.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatModuleModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
