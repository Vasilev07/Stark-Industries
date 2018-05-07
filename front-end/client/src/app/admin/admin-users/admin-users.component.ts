import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { AdminUsersService } from '../../core/admin-services/admin-users.service';
import { Roles } from '../../models/roles.enum';
import { User } from '../../models/user';
import { animations } from '../../shared/animations';

@Component({
    selector: 'stark-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css'],
    animations: [animations.routerAnimation],
    host: { '[@routerAnimation]': ''},
})
export class AdminUsersComponent implements OnInit {

    public users: User[] = [];
    public dataSource;
    public displayedColumns = ['id', 'firstName', 'email', 'createdAt', 'applicationsCount', 'roleId'];

    @ViewChild(MatSort) public sort: MatSort;
    @ViewChild(MatPaginator) public paginator: MatPaginator;
    private Roles = Roles;

    constructor(private adminUsersService: AdminUsersService) { }

    public ngOnInit(): void {
        this.adminUsersService.getAllUsers().subscribe((data) => {
            this.users = data;
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.sort = this.sort;
            setTimeout(() => this.dataSource.paginator = this.paginator);
        });
    }

    public searchTable(searchValue: string): void {
        const formattedSearchValue = searchValue.trim().toLowerCase();
        this.dataSource.filter = formattedSearchValue;
    }
}
