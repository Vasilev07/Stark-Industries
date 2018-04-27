import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../config/app.config';
import { Job } from '../models/job';

@Injectable()
export class CareersService {
    public jobs: Job[];

    constructor(private httpClient: HttpClient, private appConfig: AppConfig) {

    }

    public getAll(): Observable<Job[]> {
        return this.httpClient.get(`${this.appConfig.apiUrl}/careers`).map((x) => (x) as Job[]);
    }
}