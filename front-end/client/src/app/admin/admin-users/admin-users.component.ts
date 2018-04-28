import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { AdminUsersService } from '../../core/admin-services/admin-users.service';
import { User } from '../../models/user';

@Component({
    selector: 'stark-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {

    public users: User[] = [];
    public dataSource;
    public displayedColumns = ['id', 'firstName', 'email', 'createdAt', 'applicationsCount', 'roleId'];
    @ViewChild(MatPaginator) public paginator: MatPaginator;
    @ViewChild(MatSort) public sort: MatSort;
    constructor(private adminUsersService: AdminUsersService) { }
    public ngOnInit(): void {
        this.adminUsersService.getAllUsers().subscribe((data) => {
            this.users = data;
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    public searchTable(searchValue: string): void {
        const formattedSearchValue = searchValue.trim().toLowerCase(); // Remove whitespace
        this.dataSource.filter = formattedSearchValue;
      }
}
