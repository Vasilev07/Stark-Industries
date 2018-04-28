import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatModuleModule } from '../shared/mat.module.module';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './routing/contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatModuleModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDV1mce2ePIBN-9BLxhWe5s3UQWE_VZgYg',
    }),
  ],
  declarations: [
    ContactComponent,
  ],
})
export class ContactModule { }
