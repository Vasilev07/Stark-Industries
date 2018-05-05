import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { AdminButtonsService } from './admin-services/admin-button.service';
import { AdminContactService } from './admin-services/admin-contact.service';
import { AdminJobsService } from './admin-services/admin-job.service';
import { AdminUsersService } from './admin-services/admin-users.service';
import { AuthService } from './auth.service';
import { CareersService } from './careers.service';
import { ContactService } from './contact.service';
import { AlreadyLoggedInGuard } from './guards/already.logged.in.guard';
import { IsAdminGuard } from './guards/is.admin.guard';
import { IsAuthenticatedGuard } from './guards/is.authenticated.guard';
import { PatternValidatorService } from './pattern.validator.service';
import { CareersResolver } from './resolvers/careers.resolver';

export const tokenGetter = () => {
    return localStorage.getItem('access_token');
};

@NgModule({
    imports: [
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
        { provide: AuthService, useClass: AuthService },
        { provide: AlreadyLoggedInGuard, useClass: AlreadyLoggedInGuard },
        { provide: PatternValidatorService, useClass: PatternValidatorService },
        { provide: ContactService, useClass: ContactService },
        { provide: CareersService, useClass: CareersService },
        { provide: IsAdminGuard, useClass: IsAdminGuard },
        { provide: AdminUsersService, useClass: AdminUsersService },
        { provide: AdminContactService, useClass: AdminContactService},
        { provide: AdminJobsService, useClass: AdminJobsService},
        { provide: AdminButtonsService, useClass: AdminButtonsService},
        { provide: CareersResolver, useClass: CareersResolver},
        { provide: IsAuthenticatedGuard, useClass: IsAuthenticatedGuard},
    ],
})
export class CoreModule { }
