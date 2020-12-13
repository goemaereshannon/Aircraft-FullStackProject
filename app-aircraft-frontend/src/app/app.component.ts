import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-aircraft-frontend';

  constructor(public signalRService: SignalRService) {}
  ngOnInit() {
    this.signalRService.startConnection();

    //this.startHttpRequest();
  }
  clicked = (event: Event) => {
    //send to realtime service
    this.signalRService.sendBroadcast();
    //listen to realtime service
    this.signalRService.showBroadcast();
  };
}
