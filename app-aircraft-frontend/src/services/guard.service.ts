import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { userInfo } from 'os';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    console.log('authenticating');
    if (!this.auth.isAuthenticated()) {
      this.auth.isLoggedIn = false;
      this.router.navigate(['identity/login']);
      return false;
    }
    this.auth.isLoggedIn = true;
    this.auth.getUserId();
    var result = this.auth.getProfileInfoUser().subscribe({
      next: (data) => this.auth.setUser(data),
      error: (err) => {
        console.log({ err });
      },
    });
    console.log({ result });
    return true;
  }
}
