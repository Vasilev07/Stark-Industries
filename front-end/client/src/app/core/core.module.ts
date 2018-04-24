import { NgModule } from '@angular/core';

import { CareersService } from './careers.service';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService},
    {provide: AuthService, useClass: AuthService},
  ]
})
export class CoreModule { }
