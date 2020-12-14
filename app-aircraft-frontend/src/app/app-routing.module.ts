import { NgModule } from '@angular/core';
import { Routes, CanActivate, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { RegisterComponent } from '../presentations/identity/register/register.component';
import { LoginComponent } from '../presentations/identity/login/login.component';
import { AvailableflightsComponent } from '../presentations/flight/availableflights/availableflights.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDiscoverComponent } from 'presentations/admin/admin-discover/admin-discover.component';
import { RoleGuardService as RoleGuard } from '../services/role-guard.service';
import { AuthGuardService as AuthGuard } from 'services/guard.service';
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
    path: 'review',
    canActivate: [AuthGuard],
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
