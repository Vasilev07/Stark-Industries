import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { User } from '../../models/user';

@Injectable()
export class AdminUsersService {
    constructor(private appConfig: AppConfig, private http: HttpClient) { }

    public getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.appConfig.apiUrl}/admin/users`);
    }
}
