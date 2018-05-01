import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatModuleModule } from '../shared/mat.module.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminDeleteDialogComponent } from './admin-contact/admin-delete-dialog/admin-delete-dialog.component';
import { AdminFormComponent } from './admin-contact/admin-form/admin-form.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRoutingModule } from './routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatModuleModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AdminDeleteDialogComponent],
  declarations: [AdminUsersComponent, AdminContactComponent, AdminFormComponent, AdminDeleteDialogComponent],
})
export class AdminModule { }
