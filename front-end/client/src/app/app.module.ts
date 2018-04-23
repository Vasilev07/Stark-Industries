import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppConfig } from './config/app.config';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
