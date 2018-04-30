import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { ContactService } from '../../core/contact.service';
import { ContactGetModel } from '../../models/contacts/contactGetModel';

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
    constructor(private contactGetService: ContactService, private router: Router) { }

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

}
