import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from './auth.service';
import { CareersService } from './careers.service';
import { AlreadyLoggedInGuard } from './guards/already.logged.in.guard';
import { PatternValidatorService } from './pattern.validator.service';

export const tokenGetter = () => {
  return localStorage.getItem('access_token');
};

@NgModule({
  imports:[
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
          tokenGetter,
          whitelistedDomains: ['localhost:8000'],
          blacklistedRoutes: [],
      },
  }),
  ],
  providers: [
    {provide: CareersService, useClass: CareersService},
    {provide: AuthService, useClass: AuthService},
    {provide: AlreadyLoggedInGuard, useClass: AlreadyLoggedInGuard},
    {provide: PatternValidatorService, useClass: PatternValidatorService},
  ]
})
export class CoreModule { }
