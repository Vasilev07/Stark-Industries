import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../config/app.config';
import { Job } from '../models/job';

@Injectable()
export class CareersService {
    jobs: Job[];

    constructor(private httpClient: HttpClient, private appConfig: AppConfig) {

    }

    getAll(): Observable<Job[]> {
        return this.httpClient.get(`${this.appConfig.apiUrl}/careers`).map((x) => <Job[]>(x));
    }
}
