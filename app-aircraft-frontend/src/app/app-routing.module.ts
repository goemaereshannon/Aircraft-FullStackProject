import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { RegisterComponent } from '../presentations/identity/register/register.component';
import { LoginComponent } from '../presentations/identity/login/login.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';

const routes: Routes = [
  { path: '', component: DiscoverComponent, pathMatch: 'full' },
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
    path: 'review',
    loadChildren: () =>
      import(
        /* webpackChunkName: "review" */
        /* webpackMode: "lazy" */
        '../presentations/review/review.module'
      ).then((c) => c.ReviewModule),
  },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
