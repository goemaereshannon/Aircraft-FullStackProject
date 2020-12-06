import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterComponent } from '../presentations/identity/register.component';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TravelerinfoComponent } from 'src/presentations/reservation/travelerinfo/travelerinfo.component';
import { TravelerseatComponent } from 'src/presentations/reservation/travelerseat/travelerseat.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiscoverComponent,
    AvailableflightsComponent,
    TravelerinfoComponent,
    TravelerseatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
