import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { CareersService } from './careers.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService},
    {provide: AuthService, useClass: AuthService},
  ],
})
export class CoreModule { }
