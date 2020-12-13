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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiscoverComponent,
    AvailableflightsComponent,
    PageNotFoundComponent,
    AdminDiscoverComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReviewModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    RouterModule.forRoot([{ path: 'discover', component: DiscoverComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
