import { Component, OnInit } from '@angular/core';
import { signalRService } from 'src/services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-aircraft-frontend';
  constructor(public signalRService: signalRService) {}
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.showAdminMessage();
    //this.startHttpRequest();
  }
  clicked = (event: Event) => {
    //send to realtime service
    this.signalRService.sendBroadcast();
    //listen to realtime service
    this.signalRService.showBroadcast();
  };
}
