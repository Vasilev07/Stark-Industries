import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MatModuleModule } from '../shared/mat.module.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminDeleteDialogComponent } from './admin-contact/admin-delete-dialog/admin-delete-dialog.component';
import { AdminFormComponent } from './admin-contact/admin-form/admin-form.component';
import { AdminJobAdsComponent } from './admin-job-ads/admin-job-ads.component';
import { CreateJobComponent } from './admin-job-ads/create-job/create-job.component';
import { AdminFormLinksComponent } from './admin-links/admin-form-links/admin-form-links.component';
import { AdminLinksComponent } from './admin-links/admin-links.component';
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
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  entryComponents: [AdminDeleteDialogComponent],
  declarations: [
    AdminUsersComponent,
    AdminContactComponent,
    AdminFormComponent,
    AdminDeleteDialogComponent,
    AdminLinksComponent,
    AdminFormLinksComponent,
    AdminJobAdsComponent,
    CreateJobComponent,
],
})
export class AdminModule { }
