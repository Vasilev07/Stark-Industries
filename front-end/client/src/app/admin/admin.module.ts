import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModuleModule } from '../shared/mat.module.module';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRoutingModule } from './routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatModuleModule,
    FlexLayoutModule,
  ],
  declarations: [AdminUsersComponent],
})
export class AdminModule { }
