import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { FlightService } from '../flight.service';
import { UserService } from '../../../services/user.service';
import { User } from 'presentations/identity/user';

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
  isLoggedIn: Boolean;
  user: User;

  constructor(
    private flightService: FlightService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
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
  findFlight(payload): void {
    console.log(payload);
    this.router.navigate(['/flight/availableflights'], {
      state: { data: payload },
    });
  }
}
