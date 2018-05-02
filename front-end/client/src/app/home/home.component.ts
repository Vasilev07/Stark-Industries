import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib';
import { FacebookService } from 'ngx-facebook';

import { environment } from './../../environments/environment';

@Component({
    selector: 'stark-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public bck: string;
    constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService, private fb: FacebookService) { }

    public ngOnInit(): void {
        this.bck = environment.bck;
        this.fb.init({
            version: 'v2.9',
            xfbml: true,
        });
    }

}
