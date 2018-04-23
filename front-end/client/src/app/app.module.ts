import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppConfig } from './config/app.config';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    LoginComponent,
    RegisterComponent,
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
