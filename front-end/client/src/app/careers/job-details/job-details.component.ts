import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { CareersService } from '../../core/careers.service';
import { Job } from '../../models/job';

@Component({
    selector: 'stark-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
    @Input()
    public job: Job;

    public jobDetail: Job;
    public createdAt: string;

    public previousRoute: string;
    constructor(private carrerService: CareersService, private route: ActivatedRoute, private router: Router) { }

    public ngOnInit(): void {
        this.route.params.subscribe((param: Params) => {
            this.carrerService.getById(+param.id).subscribe((data) => {
                this.jobDetail = data;
                console.log(this.jobDetail);
            });
        });
    }

    public navigateTo(jobId: number): void {
        this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((ev) => {
            console.log(ev);
        });
        this.router.navigate([`careers/jobDetails/${jobId}/apply`]);
    }
}
