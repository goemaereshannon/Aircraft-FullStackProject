import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from './../environments/environment';
import { RegisterComponent } from '../presentations/identity/register/register.component';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { ReviewModule } from '../presentations/review/review.module';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';
import { LoginComponent } from '../presentations/identity/login/login.component';
import { CommonModule } from '@angular/common';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../presentations/shared/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiscoverComponent,
    AvailableflightsComponent,
    PageNotFoundComponent,
    AdminDiscoverComponent,
    LoginComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReviewModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule,
    MatDialogModule,
    BrowserAnimationsModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),

    RouterModule.forRoot([{ path: 'discover', component: DiscoverComponent }]),
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
