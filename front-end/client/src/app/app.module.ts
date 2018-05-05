import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './config/app.config';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NavigationModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule.forRoot(),
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule { }
