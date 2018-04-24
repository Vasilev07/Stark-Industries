import { NgModule } from '@angular/core';

import { CareersService } from './careers.service';
import { AuthService } from './auth.service';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { AlreadyLoggedInGuard } from './guards/already.logged.in.guard';


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
  ]
})
export class CoreModule { }
