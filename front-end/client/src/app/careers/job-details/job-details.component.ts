import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';
import { CareersService } from '../../core/careers.service';
import { Job } from '../../models/job';
import { animations } from '../../shared/animations';

@Component({
    selector: 'stark-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.css'],
    animations: [animations.routerAnimation],
    host: { '[@routerAnimation]': ''},
})
export class JobDetailsComponent implements OnInit {
    @Input()
    public job: Job;

    public jobDetail: Job;
    public createdAt: string;
    public isAdmin: boolean;
    public previousRoute: string;
    constructor(
        private carrerService: CareersService,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
    ) { }

    public ngOnInit(): void {
        this.route.params.subscribe((param: Params) => {
            this.carrerService.getById(+param.id).subscribe((data) => {
                this.jobDetail = data;
            });
        });
        this.isAdmin = this.authService.isAdmin();
    }

    public navigateTo(jobId: number): void {
        this.router.navigate([`careers/jobDetails/${jobId}/apply`]);
    }

    public navigateAdminTo(jobId: number): void {
        this.router.navigate([`admin/careers/jobDetails/${jobId}/applications`]);
    }
}
