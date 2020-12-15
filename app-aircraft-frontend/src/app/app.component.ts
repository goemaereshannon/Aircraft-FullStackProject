import { Component, OnInit } from '@angular/core';
import { User } from 'presentations/identity/user';
import { UserService } from 'services/user.service';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-aircraft-frontend';

  constructor(
    public signalRService: SignalRService,
    public userService: UserService
  ) {}
  user: User;
  ngOnInit() {
    this.signalRService.startConnection();
    // this.userService.ngOnInit();
    // this.userService.getProfileInfoUser().subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => {
    //     console.log({ err });
    //   },
    // });

    // console.log({ appuser: this.user });
    // console.log({ ingelogdinapp: this.userService.isLoggedIn });

    //this.startHttpRequest();
  }
  clicked = (event: Event) => {
    //send to realtime service
    this.signalRService.sendBroadcast();
    //listen to realtime service
    this.signalRService.showBroadcast();
  };
}
