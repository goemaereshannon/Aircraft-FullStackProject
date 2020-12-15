import { LOCALE_ID, NgModule } from '@angular/core';

import { Routes, CanActivate, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { RegisterComponent } from '../presentations/identity/register/register.component';
import { LoginComponent } from '../presentations/identity/login/login.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';
import { AppComponent } from '../app/app.component';
import { TravelerinfoComponent } from '../presentations/reservation/travelerinfo/travelerinfo.component';
import { TravelerseatComponent } from '../presentations/reservation/travelerseat/travelerseat.component';

import { ReviewComponent } from '../presentations/review/review.component';
import { ConfirmationComponent } from 'presentations/reservation/confirmation/confirmation.component';
import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RoleGuardService as RoleGuard } from '../services/role-guard.service';
import { AuthGuardService as AuthGuard } from 'services/guard.service';
import { ProfileComponent } from '../presentations/profile/profile.component';

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
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: 'discover',
        component: AdminDiscoverComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'Admin',
        },
      },
    ],
  },
  {
    path: 'flight',
    children: [
      {
        path: 'discover',
        component: DiscoverComponent,
        //canActivate: [AuthGuard],
      },
      {
        path: 'availableflights',
        component: AvailableflightsComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'reservation',
    children: [
      {
        path: 'travelerinfo/*',
        redirectTo: `/reservation/travelerinfo/en`,
        canActivate: [AuthGuard],
      },
      {
        path: 'travelerinfo/:lang',
        component: TravelerinfoComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'travelerseat',
        component: TravelerseatComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  {
    path: 'review',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        /* webpackChunkName: "review" */
        /* webpackMode: "lazy" */
        '../presentations/review/review.module'
      ).then((c) => c.ReviewModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page

  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
