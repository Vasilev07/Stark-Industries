import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../core/auth.service';
import { Job } from '../models/job';

@Component({
  selector: 'stark-careers-view',
  templateUrl: './careers-view.component.html',
  styleUrls: ['./careers-view.component.css'],
})
export class CareersViewComponent implements OnInit {
    @Input()
    public job: Job;
    public loggedIn: boolean;
    constructor(private authService: AuthService) { }

    public ngOnInit(): void {
        this.loggedIn = this.authService.isAuthenticated();
    }

}
