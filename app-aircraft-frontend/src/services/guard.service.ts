import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    console.log('authenticating');
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['identity/login']);
      return false;
    }
    return true;
  }
}
