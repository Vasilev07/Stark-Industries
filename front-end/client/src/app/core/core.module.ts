import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersService } from './careers.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService},
    // {provide: AuthService, useClass: AuthService},
  ]
})
export class CoreModule { }
