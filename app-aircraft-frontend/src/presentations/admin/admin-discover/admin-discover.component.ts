import { Component, OnInit } from '@angular/core';
import { FlightService } from 'presentations/flight/flight.service';
import { SignalRService } from 'services/signal-r.service';
import { UserService } from 'services/user.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'presentations/shared/dialog/dialog.component';
@Component({
  selector: 'app-admin-discover',
  templateUrl: './admin-discover.component.html',
  styleUrls: [
    './admin-discover.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class AdminDiscoverComponent implements OnInit {
  allFlights;
  AdminMessage: string;
  message: void;
  constructor(
    private flightService: FlightService,
    private userService: UserService,
    private signalRService: SignalRService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.message = this.signalRService.readAdminMessage();
    this.flightService.getFlights().subscribe((data) => {
      this.allFlights = data;
    });
    console.log(this.allFlights);
    console.log(this.allFlights);

    this.openDialog();
  }
  logout(): void {
    this.userService.logoutUser();
  }

  openDialog() {
    console.log({ message: this.message });
    if (this.AdminMessage != null) {
      console.log({ admin: this.AdminMessage });
      const dialogRef = this.dialog.open(DialogComponent);
    }
  }
  //REALTIME
}
