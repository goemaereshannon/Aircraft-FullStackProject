import { Component, OnInit } from '@angular/core';
import { FlightService } from 'presentations/flight/flight.service';

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
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((data) => {
      this.allFlights = data;
    });
    console.log(this.allFlights);
    console.log(this.allFlights);
  }
}
