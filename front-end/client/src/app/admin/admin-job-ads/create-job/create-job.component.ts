import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminJobsService } from '../../../core/admin-services/admin-job.service';
import { JobCreate } from '../../../models/job/job-create/job-create';
import { animations } from '../../../shared/animations';

@Component({
    selector: 'stark-create-job',
    templateUrl: './create-job.component.html',
    styleUrls: ['./create-job.component.css'],
    animations: [animations.routerAnimation],
    host: { '[@routerAnimation]': ''},
})
export class CreateJobComponent implements OnInit {
    public createJobForm: FormGroup;
    public title: string;
    public description: string;
    public type: string = '';
    public status: string = '';
    public paramsId: number;

    public textFieldMaxCount = 1024;
    public options: object = {
        charCounterCount: true,
        charCounterMax: this.textFieldMaxCount,
        filUpload: false,
        // useClasses: false,
    };
    constructor(
        private activatedRouted: ActivatedRoute,
        private formBuilder: FormBuilder,
        private adminJobService: AdminJobsService,
        private route: Router,
        private toastr: ToastrService,
    ) { }

    public ngOnInit(): void {
        this.activatedRouted.params.subscribe((param) => {
            this.paramsId = param.id;
            if (param.id) {
                this.adminJobService.getJobById(+param.id).subscribe((job) => {
                    this.title = job.title;
                    this.description = job.description;
                    this.type = job.type;
                    this.status = job.status;
                });
            }
        });
        this.createJobForm = this.formBuilder.group({
            title: [this.title, [Validators.required]],
            description: [this.description, [Validators.required]],
            type: [this.type, [Validators.required]],
            status: [this.status, [Validators.required]],
        });
    }

    public create(job: JobCreate): void {
        if (!this.paramsId) {
            this.adminJobService.createNewJob(job).subscribe(
                (res) => {
                this.toastr.success(`New contact address created!`);
                this.route.navigate([`/admin/careers`]);
            },
                (err: HttpErrorResponse) => {
                    this.toastr.error(`Server error: ${err}`);
                });
        } else {
            this.adminJobService.updateJob(job, this.paramsId).subscribe(
                (res) => {
                this.toastr.success(`Contact ${job.title} has been updated`);
                this.route.navigate([`/admin/contacts`]);
            },
                (err: HttpErrorResponse) => {
                    this.toastr.error(`Server error: ${err}`);
                });
        }
    }
}
