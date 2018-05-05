import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Job } from '../../models/job';
import { CareersService } from '../careers.service';

@Injectable()
export class CareersResolver implements Resolve<Job[]> {
    constructor(private careerService: CareersService) { }
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Job[] | Observable<Job[]> | Promise<Job[]> {
        return this.careerService.getAll();
    }
}
