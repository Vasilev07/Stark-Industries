import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatModuleModule } from '../shared/mat.module.module';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './routing/contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatModuleModule,
  ],
  declarations: [
    ContactComponent,
  ],
})
export class ContactModule { }
