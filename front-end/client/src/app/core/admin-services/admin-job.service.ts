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
} from '../../config/app.config';
import {
  Job
} from '../../models/job';
import {
  JobCreate
} from '../../models/job/job-create/job-create';
@Injectable()
export class AdminJobsService {
  constructor(private appConfig: AppConfig, private httpClient: HttpClient) {}

  public getAllJobsFromAdmin(): Observable < Job[] > {
    return this.httpClient.get < Job[] > (`${this.appConfig.apiUrl}/admin/careers`);
  }

  public getJobById(id: number): Observable < Job > {
    return this.httpClient.get < Job > (`${this.appConfig.apiUrl}/admin/careers/jobDetails/${id}`);
  }

  public createNewJob(job: JobCreate): Observable < JobCreate > {
    return this.httpClient.post < JobCreate > (`${this.appConfig.apiUrl}/admin/careers/create`, job);
  }

  public updateJob(job: JobCreate, id: number): Observable < JobCreate > {
    return this.httpClient.put<JobCreate>(`${this.appConfig.apiUrl}/admin/careers/jobDetails/${id}`, job);
  }

  public deleteJob(id: number): Observable<any> {
      return this.httpClient.delete(`${this.appConfig.apiUrl}/admin/careers/jobDetails/${id}`);
  }

  public getAllApplications(id:number): Observable<Job> {
    return this.httpClient.get<Job>(`${this.appConfig.apiUrl}/admin/careers/jobDetails/${id}/applications`);
}
}
