import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'stark-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(private router: Router, private loadingBarService: SlimLoadingBarService) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.RoutesEventHandler(event);
        });
    }

    private RoutesEventHandler(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loadingBarService.start();
        }
        if (event instanceof NavigationEnd) {
            this.loadingBarService.stop();
            this.loadingBarService.complete();
        }
    }
}
