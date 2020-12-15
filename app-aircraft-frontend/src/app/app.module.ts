import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { RegisterComponent } from '../presentations/identity/register/register.component';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { TravelerinfoComponent } from '../presentations/reservation/travelerinfo/travelerinfo.component';
import { TravelerseatComponent } from '../presentations/reservation/travelerseat/travelerseat.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { ReviewModule } from '../presentations/review/review.module';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';
import { LoginComponent } from '../presentations/identity/login/login.component';
import { CommonModule } from '@angular/common';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../presentations/shared/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'presentations/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationComponent } from 'presentations/reservation/confirmation/confirmation.component';
import { ProfileComponent } from 'presentations/profile/profile.component';
import { SwitchLanguageComponent } from 'presentations/shared/switch-language/switch-language.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiscoverComponent,
    AvailableflightsComponent,
    TravelerinfoComponent,
    TravelerseatComponent,
    PageNotFoundComponent,
    AdminDiscoverComponent,
    ConfirmationComponent,
    SwitchLanguageComponent,
    LoginComponent,
    DialogComponent,
    ProfileComponent,
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
    SharedModule,
    MatSelectModule,
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
