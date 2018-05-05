import 'rxjs/add/operator/map';

import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';

import {
  AppConfig
} from '../config/app.config';
import {
  Job
} from '../models/job';

@Injectable()
export class CareersService {
  public jobs: Job[];

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {

  }

  public getAll(): Observable < Job[] > {
    return this.httpClient.get(`${this.appConfig.apiUrl}/careers`).map((x) => (x) as Job[]);
  }

  public getById(id: number): Observable < Job > {
    return this.httpClient.get < Job > (`${this.appConfig.apiUrl}/careers/jobDetails/${id}`);
  }

  public createNewApplication(userApplication: any, jobId): Observable < Job > {
    return this.httpClient.post < Job > (`${this.appConfig.apiUrl}/careers/jobDetails/${jobId}/apply`, userApplication);
  }

  public downloadFile(url: string): Observable < object > {
    const fileArray = url.split('/');
    const file = fileArray[fileArray.length - 1];
    return this.httpClient.get(`${this.appConfig.apiUrl}/careers/download/${file}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }
}
