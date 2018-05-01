import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminContactService } from '../../../core/admin-services/admin-contact.service';
import { ContactCreateModel } from '../../../models/contacts/contactCreateModel';
import { ContactGetModel } from '../../../models/contacts/contactGetModel';

@Component({
    selector: 'stark-admin-form',
    templateUrl: './admin-form.component.html',
    styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
    public form: FormGroup;
    public minLength: number = 2;
    public maxLengthName: number = 128;
    public maxLengthValue: number = 1024;
    public name: string;
    public value: string;
    public icon: string;
    public isPrimary: boolean;
    public isMappable: boolean;
    public longtitude: number;
    public latitude: number;
    public paramsId: number;
    public contactToEdit: ContactGetModel;
    public hasParams: boolean;
    constructor(
        private formBuilder: FormBuilder,
        private activatedRouted: ActivatedRoute,
        private router: Router,
        private adminContactService: AdminContactService,
        private toastr: ToastrService) { }

    public ngOnInit(): void {
        this.activatedRouted.params.subscribe((param) => {
            this.paramsId = param.id;
            console.log(param.id);
            if (param.id) {
                this.adminContactService.getById(+this.paramsId).subscribe((contact) => {
                    console.log(contact);
                    this.contactToEdit = contact;
                    this.name = contact.name;
                    this.value = contact.value;
                    this.icon = contact.icon;
                    this.isPrimary = contact.isPrimary;
                    this.isMappable = contact.isMappable;
                    this.longtitude = contact.longtitude;
                    this.latitude = contact.latitude;
                    console.log(`this.name: ${this.name}`);
                    console.log(`contact.name: ${contact.name}`);
                });
            }
            // console.log(typeof this.paramsId);
        });
        this.form = this.formBuilder.group({
            name: [this.name, [Validators.minLength(this.minLength), Validators.maxLength(this.maxLengthName), Validators.required]],
            value: [this.value, [Validators.minLength(this.minLength), Validators.maxLength(this.maxLengthValue), Validators.required]],
            icon: [this.icon, [Validators.minLength(this.minLength), Validators.required]],
            isPrimary: [this.isPrimary, [Validators.required]],
            isMappable: [this.isMappable, [Validators.required]],
            longtitude: this.longtitude,
            latitude: this.latitude,
        });
        // console.log(this.activatedRouted.params);
        // console.log(this.activatedRouted.params.value);

    }
    public onSubmit(contact: ContactCreateModel): void {
        if (!this.paramsId) {
            this.adminContactService.createContact(contact).subscribe(
                (res) => {
                    this.toastr.success(`New contact address created!`);
                    this.router.navigate([`/admin/contacts`]);
                },
                (err: HttpErrorResponse) => {
                    this.toastr.error(`Server error: ${err}`);
                });
        } else {
            this.adminContactService.updateContact(contact, this.paramsId).subscribe(
                (res) => {
                    this.toastr.success(`Contact ${this.contactToEdit.name} has been updated`);
                    this.router.navigate([`/admin/contacts`]);
                },
                (err: HttpErrorResponse) => {
                    this.toastr.error(`Server error: ${err}`);
                });
        }
    }
}
