import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
    declarations: [
        NavigationComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
    ],
    exports: [
        NavigationComponent,
    ],
})

export class NavigationModule { }
