import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent, MatPaginator, PageEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { CareersService } from '../core/careers.service';
import { Job } from '../models/job';

@Component({
    selector: 'stark-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.css'],
})
export class CareersComponent implements OnInit {

    @Input()
    public jobs: Job[] = [];
    // public paginatedJobs: Job[] = [];
    public filteredJobs: Job[] = [];
    public jobCategories = [];
    public date: string = '';
    public byType: string = '';
    public search: string = '';
    public pageSize: number = 5;

    public pageIndex: number = 5;
    public length: number;
    public selectedDate: number;

    @ViewChild(MatPaginator) public paginator: MatPaginator;

    constructor(
        private careerService: CareersService,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute) { }

    public ngOnInit(): void {
        this.activatedRoute.data.subscribe((data) => {
            if (this.authService.isAdmin()) {
                this.jobs = data['jobs'];
                this.filteredJobs = data['jobs'];
                this.filterRepeatingJobsCat();
                this.length = this.jobs.length;
                this.filteredJobs = this.jobs.slice(0, this.pageSize);
            } else {
                this.jobs = data['jobs'].filter((job) => job.status === 'active');
                this.filteredJobs = this.jobs;
                this.filterRepeatingJobsCat();
                this.length = this.jobs.length;
                this.filteredJobs = this.jobs.slice(0, this.pageSize);
            }
        });
        console.log(this.jobs.length);
        console.log(this.jobs);
    }

    public onChangePage(event: PageEvent): void {
        this.pageSize = event.pageSize;
        const copy = this.jobs;
        this.filteredJobs = copy.slice(event.pageIndex * this.pageSize, (event.pageSize * event.pageIndex) + this.pageSize);
        console.log(event)
    }

    public filterRepeatingJobsCat(): void {
        this.jobCategories = this.jobs.filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.type).indexOf(obj.type) === pos;
        });
    }
    public clearFilter(): void {
        this.search = '';
        this.date = '';
        this.byType = '';
        this.filteredJobs = this.jobs.slice();
        this.onChangePage({
            pageIndex: 0,
            length: this.length,
            pageSize: this.pageSize,
          })
    }
    private onChange(): void {
        this.filteredJobs = this.jobs.filter((jobCat) => jobCat.type === this.byType);

        if (this.search) {
            this.filteredJobs = this.filteredJobs.filter((job) => job.title.toLowerCase().indexOf(this.search) >= 0 ||
                job.description.toLowerCase().indexOf(this.search) >= 0);
        }

        if (this.date) {
            this.filteredJobs = this.filteredJobs.filter((date) => {
                return new Date(date.createdAt).setHours(0, 0, 0, 0) <= this.selectedDate;
            });
        }

    }

    private filterBySearch(): void {

        this.search = this.search.toLowerCase().trim();
        this.filteredJobs = this.jobs.filter((job) => job.title.toLowerCase().indexOf(this.search) >= 0 ||
            job.description.toLowerCase().indexOf(this.search) >= 0);

        if (this.date) {
            this.filteredJobs = this.filteredJobs.filter((date) => {
                return new Date(date.createdAt).setHours(0, 0, 0, 0) <= this.selectedDate;
            });
        }

        if (this.byType) {
            this.filteredJobs = this.filteredJobs.filter((jobCat) => jobCat.type === this.byType);
        }
    }

    private dateChange(date: MatDatepickerInputEvent<Date>): void {
        this.selectedDate = new Date(this.date).setHours(0, 0, 0, 0);

        this.filteredJobs = this.jobs.filter((job) => {
            return new Date(job.createdAt).setHours(0, 0, 0, 0) <= this.selectedDate;
        });

        if (this.search) {
            this.filteredJobs = this.filteredJobs.filter((job) => job.title.toLowerCase().indexOf(this.search) >= 0 ||
                job.description.toLowerCase().indexOf(this.search) >= 0);
        }

        if (this.byType) {
            this.filteredJobs = this.filteredJobs.filter((jobCat) => jobCat.type === this.byType);
        }
    }
}
