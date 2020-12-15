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
import { TravelerinfoComponent } from '../presentations/reservation/travelerinfo/travelerinfo.component';
import { TravelerseatComponent } from '../presentations/reservation/travelerseat/travelerseat.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { ReviewModule } from '../presentations/review/review.module';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';
import { ConfirmationComponent } from 'presentations/reservation/confirmation/confirmation.component';

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
  ],
  imports: [
    BrowserModule,
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
