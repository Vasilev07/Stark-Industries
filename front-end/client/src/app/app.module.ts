import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CareersComponent } from './careers/careers.component';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './config/app.config';
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
    BrowserModule,
    NavigationModule,
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
