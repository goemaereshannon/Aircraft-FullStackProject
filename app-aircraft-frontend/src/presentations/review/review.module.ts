import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';

console.log('REVIEW MODULE');

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReviewComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ReviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReviewModule {}