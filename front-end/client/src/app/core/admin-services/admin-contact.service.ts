import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../config/app.config';
import { ContactCreateModel } from '../../models/contacts/contactCreateModel';
import { ContactGetModel } from '../../models/contacts/contactGetModel';

@Injectable()
export class AdminContactService {
    constructor(private appConfig: AppConfig, private http: HttpClient) { }

    // public getAllContacts(): Observable<Contact[]> {
    //     return this.http.get<Contact[]>(`${this.appConfig.apiUrl}`)
    // }
    public getById(id: number): Observable<ContactGetModel> {
        return this.http.get<ContactGetModel>(`${this.appConfig.apiUrl}/contact/${id}`);
    }

    public createContact(contact: ContactCreateModel): Observable<ContactCreateModel> {
        return this.http.post<ContactCreateModel>(`${this.appConfig.apiUrl}/contact`, contact);
    }

    public updateContact(contact: ContactCreateModel, id: number): Observable<ContactCreateModel> {
        return this.http.put<ContactCreateModel>(`${this.appConfig.apiUrl}/contact/${id}`, contact);
    }
    public deleteContact(id: number): Observable<any> {
       return this.http.delete(`${this.appConfig.apiUrl}/contact/${id}`);
    }
}
