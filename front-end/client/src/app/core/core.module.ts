import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { AdminContactService } from './admin-services/admin-contact.service';
import { AdminUsersService } from './admin-services/admin-users.service';
import { AuthService } from './auth.service';
import { CareersService } from './careers.service';
import { ContactService } from './contact.service';
import { AlreadyLoggedInGuard } from './guards/already.logged.in.guard';
import { IsAdminGuard } from './guards/is.admin.guard';
import { PatternValidatorService } from './pattern.validator.service';
import { AdminButtonsService } from './admin-services/admin-button.service';

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
        { provide: AdminButtonsService, useClass: AdminButtonsService},
    ],
})
export class CoreModule { }
