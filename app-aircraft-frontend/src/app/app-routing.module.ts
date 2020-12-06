import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { AppComponent } from '../app/app.component';
import { RegisterComponent } from '../presentations/identity/register.component';
import { AvailableflightsComponent } from 'src/presentations/flight/availableflights/availableflights.component';
import { TravelerinfoComponent } from '../presentations/reservation/travelerinfo/travelerinfo.component';
import { TravelerseatComponent } from '../presentations/reservation/travelerseat/travelerseat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flight/discover',
    pathMatch: 'full',
  },
  {
    path: 'identity',
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'flight',
    children: [
      {
        path: 'discover',
        component: DiscoverComponent,
      },
      {
        path: 'availableflights',
        component: AvailableflightsComponent,
      },
    ],
  },
  {
    path: 'reservation',
    children: [
      {
        path: 'travelerinfo',
        component: TravelerinfoComponent,
      },
      {
        path: 'travelerseat',
        component: TravelerseatComponent,
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
