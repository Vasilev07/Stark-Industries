import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib';
import { FacebookService } from 'ngx-facebook';

import { AdminButtonsService } from '../core/admin-services/admin-button.service';
import { ButtonGetModel } from '../models/buttons/buttonsGetModel';
import { environment } from './../../environments/environment';

@Component({
    selector: 'stark-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public backgroundVideo: string;
    public homeText: string;
    public linkButtonsLocal: ButtonGetModel[];
    public linkButtonsForeign: ButtonGetModel[];
    public socialButtons: ButtonGetModel[];
    constructor(
        private ng4TwitterTimelineService: Ng4TwitterTimelineService,
        private adminButtonService: AdminButtonsService) { }

    public ngOnInit(): void {
        this.backgroundVideo = environment.backgroundVideo;
        this.homeText = environment.homeText;
        this.adminButtonService.getAllButtons().subscribe((data) => {
            this.linkButtonsLocal = data.filter((button) => button.type === 'link' && button.targetURL.startsWith('/', 0));
            this.linkButtonsForeign = data.filter((button) => button.type === 'link' && button.targetURL.startsWith('h', 0));
            this.socialButtons = data.filter((button) => button.type === 'social');
        });
    }

}
