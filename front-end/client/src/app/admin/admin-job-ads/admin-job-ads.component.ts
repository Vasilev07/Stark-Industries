import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AdminJobsService
} from '../../core/admin-services/admin-job.service';
import {
  Router
} from '@angular/router';
import {
  Job
} from '../../models/job';
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  MatDialog
} from '@angular/material';
import {
  ToastrService
} from 'ngx-toastr';
import {
  AdminDeleteDialogComponent
} from '../admin-contact/admin-delete-dialog/admin-delete-dialog.component';
import {
  HttpErrorResponse
} from '@angular/common/http';
@Component({
  selector: 'stark-admin-job-ads',
  templateUrl: './admin-job-ads.component.html',
  styleUrls: ['./admin-job-ads.component.css']
})
export class AdminJobAdsComponent implements OnInit {
  public jobs: Job[];
  public dataSource;
  public displayedColumns = ['id', 'jobTitle', 'createdAt', 'actions'];

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  constructor(private adminJobsService: AdminJobsService,
    private router: Router,
    private toastr: ToastrService,
    private popup: MatDialog) {}

  ngOnInit(): void {
    this.adminJobsService.getAllJobsFromAdmin().subscribe((data) => {
      this.jobs = data;
      console.log(this.jobs);
      this.dataSource = new MatTableDataSource(this.jobs);
      this.dataSource.sort = this.sort;
      setTimeout(() => this.dataSource.paginator = this.paginator);
    });
  }

  public searchTable(searchValue: string): void {
    const formattedSearchValue = searchValue.trim().toLowerCase();
    this.dataSource.filter = formattedSearchValue;
  }

  public goToCreateForm() {
    this.router.navigate(['/admin/careers/create']);
  }

  public goToUpdateForm(id: number) {
    this.router.navigate([`/admin/careers/create/${id}`]);
  }

  public deleteJob(id: number) {
    const dialogRef = this.popup.open(AdminDeleteDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.adminJobsService.deleteJob(id).subscribe((res) => {
            this.toastr.success(`Contact deleted!`);
            let i = null;
            const contacToRemove = this.dataSource.data.find((contact, index) => {
              i = index;
              return contact.id === id;
            });
            this.dataSource.data.splice(i, 1);
            this.dataSource.paginator = this.paginator;
          },
          (err: HttpErrorResponse) => {
            this.toastr.error(`Server error: ${err}`);
          });
      }
    });
  }
}
