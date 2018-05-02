import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminButtonsService } from '../../../core/admin-services/admin-button.service';
import { ButtonCreateModel } from '../../../models/buttons/buttonCreateModel';
import { ButtonGetModel } from '../../../models/buttons/buttonsGetModel';

@Component({
  selector: 'stark-admin-form-links',
  templateUrl: './admin-form-links.component.html',
  styleUrls: ['./admin-form-links.component.css'],
})
export class AdminFormLinksComponent implements OnInit {

    public form: FormGroup;

    public name: string;
    public targetURL: string;
    public iconURL: string;
    public type: string;
    public hidden: boolean;
    public paramId: number;
    public linkToEdit: ButtonGetModel;

    public minLengthName: number = 3;
    public maxLength: number = 128;
    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private adminButtonService: AdminButtonsService,
        private toastr: ToastrService,
    ) { }

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.paramId = params.id;
            if (this.paramId) {
                this.adminButtonService.getById(+this.paramId).subscribe((link) => {
                    this.linkToEdit = link;
                    this.name = link.name;
                    this.targetURL = link.targetURL;
                    this.iconURL = link.iconURL;
                    this.type = link.type;
                    this.hidden = link.hidden;
                });
            }
        });

        this.form = this.formBuilder.group({
            name: [this.name, [Validators.minLength(this.minLengthName), Validators.required]],
            targetURL: [this.targetURL, [Validators.required]],
            iconURL: [this.iconURL, [Validators.required]],
            type: [this.type, [Validators.required]],
            hidden: [this.hidden, [Validators.required]],
        });
    }

    public onSubmit(link: ButtonCreateModel): void {
        if (!this.paramId) {
            this.adminButtonService.createButton(link).subscribe(
                (res) => {
                    this.toastr.success(`New Link Created!`);
                    this.router.navigate([`/admin/links`]);
                },
                (err: HttpErrorResponse) => {
                    this.toastr.error(`Server error ${err}`);
                });
        } else {
            this.adminButtonService.updateButton(link, this.paramId).subscribe(
                (res) => {
                    this.toastr.success(`Link ${this.linkToEdit.name} has been updated!`);
                    this.router.navigate([`/admin/links`]);
                },
                (err: HttpErrorResponse) => {
                    this.toastr.error(`Server error: ${err}`);
                });
        }
    }

}
