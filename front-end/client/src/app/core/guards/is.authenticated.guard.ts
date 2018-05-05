import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

    private extras: NavigationExtras;

    constructor(private authService: AuthService, private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const isAuth = this.authService.isAuthenticated();

        this.extras = {
            queryParams: { returnURL: state.url },
        };

        if (isAuth) {
            return true;
        } else {
            this.router.navigate(['/auth/login'], this.extras);
        }
    }
}
