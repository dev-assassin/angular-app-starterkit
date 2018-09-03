import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthConfig, AppConfig } from '../config';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioResources } from 'angular-formio/resource';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
