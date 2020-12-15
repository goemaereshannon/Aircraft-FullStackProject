import { LOCALE_ID, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { RegisterComponent } from '../presentations/identity/register/register.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';
import { AppComponent } from '../app/app.component';
import { TravelerinfoComponent } from '../presentations/reservation/travelerinfo/travelerinfo.component';
import { TravelerseatComponent } from '../presentations/reservation/travelerseat/travelerseat.component';

import { ReviewComponent } from '../presentations/review/review.component';

import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const languageList = ['en', 'nl', 'fr', 'zh', 'es'];

const routes: Routes = [
  { path: '', component: DiscoverComponent, pathMatch: 'full' },
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
    path: 'admin',
    children: [
      {
        path: 'discover',
        component: AdminDiscoverComponent,
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
        path: 'travelerinfo/*',
        redirectTo: `/reservation/travelerinfo/en`,
      },
      {
        path: 'travelerinfo/:lang',
        component: TravelerinfoComponent,
      },
      {
        path: 'travelerseat',
        component: TravelerseatComponent,
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  {
    path: 'review',
    loadChildren: () =>
      import(
        /* webpackChunkName: "review" */
        /* webpackMode: "lazy" */
        '../presentations/review/review.module'
      ).then((c) => c.ReviewModule),
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
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
