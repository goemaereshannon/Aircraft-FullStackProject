import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from '../presentations/flight/discover/discover.component';
import { AppComponent } from '../app/app.component';
import { RegisterComponent } from '../presentations/identity/register.component';
import { AvailableflightsComponent } from 'src/presentations/flight/availableflights/availableflights.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DiscoverComponent, pathMatch: 'full' },
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
  //path with children path:'', component: Comp, children: [{},{}]
  // { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
