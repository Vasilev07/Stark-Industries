import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { AppConfig } from './config/app.config';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NavigationModule } from './navigation/navigation.module';

export const tokenGetter = () => {
    return localStorage.getItem('access_token');
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    NavigationModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
        config: {
            tokenGetter,
            whitelistedDomains: ['localhost:8000'],
            blacklistedRoutes: [],
        },
    }),
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent],
})
export class AppModule { }
