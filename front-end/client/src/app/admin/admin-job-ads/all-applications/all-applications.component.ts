import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';

import { AdminJobsService } from '../../../core/admin-services/admin-job.service';
import { CareersService } from '../../../core/careers.service';
import { JobApplication } from '../../../models/job/job-applications/job-applications';
import { animations } from '../../../shared/animations';

@Component({
    selector: 'stark-all-applications',
    templateUrl: './all-applications.component.html',
    styleUrls: ['./all-applications.component.css'],
    animations: [animations.routerAnimation],
    host: { '[@routerAnimation]': ''},
})
export class AllApplicationsComponent implements OnInit {
    public users: JobApplication[];
    public dataSource;
    public jobTitle: string;
    public displayedColumns = ['id', 'names', 'email', 'comment', 'createdAt', 'actions'];

    @ViewChild(MatSort) public sort: MatSort;
    @ViewChild(MatPaginator) public paginator: MatPaginator;

    constructor(
        private activatedRouted: ActivatedRoute,
        private adminJobsService: AdminJobsService,
        public careersService: CareersService) { }

    public ngOnInit(): void {
        this.activatedRouted.params.subscribe((param) => {
            this.adminJobsService.getAllApplications(param.id).subscribe((data) => {
                this.users = data;
                this.dataSource = new MatTableDataSource(this.users);
                this.dataSource.sort = this.sort;
                setTimeout(() => this.dataSource.paginator = this.paginator);
                this.adminJobsService.getJobById(this.users[0].jobId).subscribe((job) => {
                    this.jobTitle = job.title;
                });
            });
        });
    }

    public searchTable(searchValue: string): void {
        const formattedSearchValue = searchValue.trim().toLowerCase();
        this.dataSource.filter = formattedSearchValue;
    }

    public downloadCv(url: string): void {
        if (url) {
            const fileArray = url.split('/');
            const file = fileArray[fileArray.length - 1];
            this.careersService.downloadFile(url).subscribe((data: HttpResponse<Blob>) => {
                saveAs(data.body, file);
            });
        }
    }

    public downloadCover(url: string): void {
        if (url) {
            const fileArray = url.split('/');
            const file = fileArray[fileArray.length - 1];
            this.careersService.downloadFile(url).subscribe((data: HttpResponse<Blob>) => {
                saveAs(data.body, file);
            });
        }
    }
}
