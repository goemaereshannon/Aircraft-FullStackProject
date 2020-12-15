import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from 'presentations/identity/user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  isLoggedIn: Boolean;
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.ngOnInit();
    this.isLoggedIn = this.userService.isLoggedIn;
    this.user = this.userService.initializeUser();

    //TODO:refactor
    if (this.isLoggedIn) {
      this.userService.getProfileInfoUser().subscribe({
        next: (data) => (this.user = { ...data }),
        error: (err) => {
          console.log({ err });
        },
      });
    }

    // this.user = { ...this.userService.loggedInUser };

    // console.log(this.userService.loggedInUser);
    // console.log(this.userService.UserId);
    // console.log({ isloggedin: this.isLoggedIn });
    // console.log({ user: this.userService.loggedInUser });
    // console.log({ dezeklojo: this.user });
  }
  logout(): void {
    this.userService.logoutUser();
  }
}
