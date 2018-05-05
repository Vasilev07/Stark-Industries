import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  CareersService
} from '../../../core/careers.service';
import {
  AdminJobsService
} from '../../../core/admin-services/admin-job.service';
import {
  User
} from '../../../models/user';
import {
  MatSort,
  MatPaginator,
  MatTableDataSource
} from '@angular/material';
import {
  saveAs
} from 'file-saver';
import {
  HttpResponse
} from '@angular/common/http';
@Component({
  selector: 'stark-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.css']
})
export class AllApplicationsComponent implements OnInit {
  public users: User[];
  public dataSource;
  public displayedColumns = ['id', 'names', 'comment', 'createdAt', 'actions']

  @ViewChild(MatSort) public sort: MatSort;
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  constructor(
    private activatedRouted: ActivatedRoute,
    private adminJobsService: AdminJobsService,
    public careersService: CareersService) {}

  ngOnInit() {
    this.activatedRouted.params.subscribe((param) => {
      console.log(param.id)
      this.adminJobsService.getAllApplications(param.id).subscribe((data) => {
        this.users = data;
        console.log(data);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
        setTimeout(() => this.dataSource.paginator = this.paginator);
      })
    });
  }

  public searchTable(searchValue: string): void {
    const formattedSearchValue = searchValue.trim().toLowerCase();
    this.dataSource.filter = formattedSearchValue;
  }

  public downloadCv(url: string) {
    if (url) {
      const fileArray = url.split('/');
      const file = fileArray[fileArray.length - 1];
      console.log(file);
      this.careersService.downloadFile(url).subscribe((data: HttpResponse < Blob > ) => {
        saveAs(data.body, file);
      });
    }
  }

  public downloadCover(url: string) {
    if (url) {
      const fileArray = url.split('/');
      const file = fileArray[fileArray.length - 1];
      console.log(file);
      this.careersService.downloadFile(url).subscribe((data: HttpResponse < Blob > ) => {
        saveAs(data.body, file);
      });
    }
  }
}
