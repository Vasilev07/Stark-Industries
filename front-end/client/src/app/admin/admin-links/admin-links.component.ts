import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminButtonsService } from '../../core/admin-services/admin-button.service';
import { ButtonGetModel } from '../../models/buttons/buttonsGetModel';
import { AdminDeleteDialogComponent } from '../admin-contact/admin-delete-dialog/admin-delete-dialog.component';

@Component({
  selector: 'stark-admin-links',
  templateUrl: './admin-links.component.html',
  styleUrls: ['./admin-links.component.css'],
})
export class AdminLinksComponent implements OnInit {

    public links: ButtonGetModel[] = [];
    public dataSource;

    public displayedColumns = ['id', 'name', 'targetURL', 'iconURL', 'type', 'hidden', 'createdAt', 'actions'];

    @ViewChild(MatSort) public sort: MatSort;
    @ViewChild(MatPaginator) public paginator: MatPaginator;

    constructor(
        private adminButtonService: AdminButtonsService,
        private router: Router,
        private popup: MatDialog,
        private toastr: ToastrService,
    ) { }

    public ngOnInit(): void {
        this.adminButtonService.getAllButtons().subscribe((data) => {
            this.links = data;
            this.dataSource = new MatTableDataSource(this.links);
            this.dataSource.sort = this.sort;
            setTimeout(() => this.dataSource.paginator = this.paginator);
        });
    }

    public searchTable(searchValue: string): void {
        const formattedSearchValue = searchValue.trim().toLowerCase();
        this.dataSource.filter = formattedSearchValue;
    }

    public goToCreateForm(): void {
        this.router.navigate(['/admin/links/form']);
    }

    public goToUpdateForm(id: number): void {
        this.router.navigate([`admin/links/form/${id}`]);
    }

    public deleteLink(id: number): void {
        const dialogRef = this.popup.open(AdminDeleteDialogComponent, {
            width: '300px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.adminButtonService.deleteButton(id).subscribe(
                    (res) => {
                        this.toastr.success(`Link deleted!`);
                        let i = null;
                        const linkToRemove = this.dataSource.data.find((link, index) => {
                            i = index;
                            return link.id === id;
                        });
                        this.dataSource.data.splice(i, 1);
                        setTimeout(() => this.dataSource.paginator = this.paginator);
                    },
                    (err: HttpErrorResponse) => {
                        this.toastr.error(`Server error: ${err}`);
                    });
            }
        });
    }
}
