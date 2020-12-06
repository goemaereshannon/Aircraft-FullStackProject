import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight/flight.service';

@Component({
  selector: 'app-travelerinfo',
  templateUrl: './travelerinfo.component.html',
  styleUrls: [
    './travelerinfo.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class TravelerinfoComponent implements OnInit {
  flight;
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    console.log(history.state.data);
    if (history.state.data) {
      console.log('Data meegegeven');
      this.flightService
        .getFlightDetails(history.state.data)
        .subscribe((data) => {
          if (data) {
            this.flight = data;
            console.log('FLIGHT');
            console.log(this.flight);
          }
        });
    }
  }
}
