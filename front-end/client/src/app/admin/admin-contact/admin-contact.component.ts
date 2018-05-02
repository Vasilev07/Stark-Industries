import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AdminContactService } from '../../core/admin-services/admin-contact.service';
import { ContactService } from '../../core/contact.service';
import { ContactGetModel } from '../../models/contacts/contactGetModel';
import { AdminDeleteDialogComponent } from './admin-delete-dialog/admin-delete-dialog.component';

@Component({
    selector: 'stark-admin-contact',
    templateUrl: './admin-contact.component.html',
    styleUrls: ['./admin-contact.component.css'],
})
export class AdminContactComponent implements OnInit {
    public contacts: ContactGetModel[] = [];
    public dataSource;
    public displayedColumns = ['id', 'name', 'value', 'isPrimary', 'isMappable', 'createdAt', 'actions'];

    @ViewChild(MatSort) public sort: MatSort;
    @ViewChild(MatPaginator) public paginator: MatPaginator;
    constructor(
        private contactGetService: ContactService,
        private router: Router, private popup: MatDialog,
        private adminContactService: AdminContactService,
        private toastr: ToastrService) { }

    public ngOnInit(): void {
        this.contactGetService.getAllContacts().subscribe((data) => {
            this.contacts = data.allContacts;
            console.log(this.contacts);
            this.dataSource = new MatTableDataSource(this.contacts);
            this.dataSource.sort = this.sort;
            setTimeout(() => this.dataSource.paginator = this.paginator);
        });
    }

    public searchTable(searchValue: string): void {
        const formattedSearchValue = searchValue.trim().toLowerCase();
        this.dataSource.filter = formattedSearchValue;
    }

    public goToCreateForm(): void {
        this.router.navigate(['/admin/contacts/form']);
    }
    public goToUpdateForm(id: number): void {
        this.router.navigate([`/admin/contacts/form/${id}`]);
    }
    public deleteContact(id: number, table: any): void {
        const dialogRef = this.popup.open(AdminDeleteDialogComponent, {
            width: '300px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.adminContactService.deleteContact(id).subscribe(
                    (res) => {
                        this.toastr.success(`Contact deleted!`);
                        console.log(table);
                        // setTimeout(()=> table.renderRows());
                        let i = null;
                        const contacToRemove = this.dataSource.data.find((contact, index) => {
                            i = index;
                            return contact.id === id;
                        });
                        this.dataSource.data.splice(i, 1);
                        setTimeout(() =>  this.dataSource.paginator = this.paginator);
                    },
                    (err: HttpErrorResponse) => {
                        this.toastr.error(`Server error: ${err}`);
                    });
            }
        });
    }
}
