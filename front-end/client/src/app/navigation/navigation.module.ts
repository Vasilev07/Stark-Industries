import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatModuleModule } from '../shared/mat.module.module';
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
        MatModuleModule,
    ],
    exports: [
        NavigationComponent,
    ],
})

export class NavigationModule { }
