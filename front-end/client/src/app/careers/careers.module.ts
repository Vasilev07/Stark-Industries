import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './routing/careers-routing.module';
import { MatModuleModule } from '../shared/mat.module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CareersRoutingModule,
    MatModuleModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [CareersComponent]
})
export class CareersModule { }
