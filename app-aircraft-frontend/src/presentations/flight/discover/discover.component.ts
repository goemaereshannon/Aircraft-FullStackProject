import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { FlightService } from '../flight.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss', '../../../app/app.component.scss'],
})

export class DiscoverComponent implements OnInit {
  flightstoday;
  departures;
  destinations;
  searchForm;

  constructor(
    private flightService: FlightService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      departure: '',
      destination: '',
      dateOfDeparture: '',
      dateOfArrival: '',
    });
  }

  

  ngOnInit(): void {
    this.flightService.getFlightsToday().subscribe(
      (data) => {
        this.flightstoday = data;
      },
      (error) => {
        console.error({ error });
      }
    );
    this.flightService.getDepartures().subscribe(
      (data) => {
        console.log(data);
        this.departures = data;
      },
      (error) => {
        console.error({ error });
      }
    );
    this.flightService.getDestinations().subscribe(
      (data) => {
        console.log(data);
        this.destinations = data;
      },
      (error) => {
        console.error({ error });
      }
    );
  }
  findFlight(data): void {
    console.log(data);
    this.router.navigate(['/flight/availableflights']);
  }
}
