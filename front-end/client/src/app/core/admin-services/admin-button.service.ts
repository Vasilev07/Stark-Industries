import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { ButtonCreateModel } from '../../models/buttons/buttonCreateModel';
import { ButtonGetModel } from '../../models/buttons/buttonsGetModel';

@Injectable()
export class AdminButtonsService {
    constructor(private appConfig: AppConfig, private http: HttpClient) { }

    public getAllButtons(): Observable<ButtonGetModel[]> {
        return this.http.get<ButtonGetModel[]>(`${this.appConfig.apiUrl}/buttons`);
    }

    public getById(id: number): Observable<ButtonGetModel> {
        return this.http.get<ButtonGetModel>(`${this.appConfig.apiUrl}/buttons/${id}`);
    }

    public createButton(button: ButtonCreateModel): Observable<ButtonCreateModel> {
        return this.http.post<ButtonCreateModel>(`${this.appConfig.apiUrl}/buttons`, button);
    }

    public updateButton(button: ButtonCreateModel, id: number): Observable<ButtonCreateModel> {
        return this.http.put<ButtonCreateModel>(`${this.appConfig.apiUrl}/buttons/${id}`, button);
    }

    public deleteButton(id: number): Observable<any> {
        return this.http.delete(`${this.appConfig.apiUrl}/buttons/${id}`);
    }
}
