import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent, UserProfileComponent],
  exports: [StarComponent, CommonModule, FormsModule, UserProfileComponent],
})
export class SharedModule {}
