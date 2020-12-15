import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FlightService } from '../../../services/flight.service';
import { Departure, Destination, Flight } from '../flight';
var dateFormat = require('dataformat');

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: [
    './availableflights.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class AvailableflightsComponent {
  // implements OnInit
  searchForm: any;
  departure: Departure;
  destination: Destination;
  dateOfDeparture: Date;
  dateOfArrival: Date;
  query = '';
  searchedflights: Flight[];
  seats: any;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchForm = history.state.data;
    console.log(history.state.data);
    console.log(this.searchForm);
    if (this.searchForm) {
      this.departure = this.searchForm.departure;
      this.destination = this.searchForm.destination;
      this.dateOfDeparture = this.searchForm.dateOfDeparture;
      this.dateOfArrival = this.searchForm.dateOfArrival;
      if (
        this.departure == null &&
        this.destination == null &&
        this.dateOfDeparture == null &&
        this.dateOfArrival == null
      ) {
        this.flightService.getFutureFlights().subscribe((data) => {
          this.searchedflights = data;
          if (this.searchedflights) {
            this.searchedflights.forEach((element) => {
              this.flightService.convertToTime(element);
            });
          }
        });
      }
      if (this.departure != null) {
        this.query = `departureSearch=${this.departure}`;
      }
      if (this.destination != null) {
        if (this.query == '') {
          this.query = `destinationSearch=${this.destination}`;
        } else {
          this.query += `&destinationSearch=${this.destination}`;
        }
      }
      if (this.dateOfDeparture != null) {
        if (this.query == '') {
          this.query = `departureTimeSearch=${this.dateOfDeparture}`;
        } else {
          this.query += `&departureTimeSearch=${this.dateOfDeparture}`;
        }
      }
      if (this.dateOfArrival != null) {
        if (this.query == '') {
          this.query = `arrivalTimeSearch=${this.dateOfArrival}`;
        } else {
          this.query += `&arrivalTimeSearch=${this.dateOfArrival}`;
        }
      }

      this.flightService
        .getFlightsByDatesDepartureAndDestination(this.query)
        .subscribe((data) => {
          this.searchedflights = data;
          if (this.searchedflights) {
            this.searchedflights.forEach((element) => {
              this.flightService.convertToTime(element);
              this.flightService
                .getAvailableSeats(element.airplaneId)
                .subscribe((data) => {
                  this.seats = data.length;
                });
            });
          }
        });
    }
  }
}
