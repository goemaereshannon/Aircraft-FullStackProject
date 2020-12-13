import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FlightService } from '../flight.service';
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
  searchForm;
  departure;
  destination;
  dateOfDeparture;
  dateOfArrival;
  query = '';
  searchedflights;

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
        this.departure == '' &&
        this.destination == '' &&
        this.dateOfDeparture == '' &&
        this.dateOfArrival == ''
      ) {
        this.flightService.getFutureFlights().subscribe((data) => {
          this.searchedflights = data;
        });
      }
      if (this.departure != '') {
        this.query = `departureSearch=${this.departure}`;
      }
      if (this.destination != '') {
        if (this.query == '') {
          this.query = `destinationSearch=${this.destination}`;
        } else {
          this.query += `&destinationSearch=${this.destination}`;
        }
      }
      if (this.dateOfDeparture != '') {
        if (this.query == '') {
          this.query = `departureTimeSearch=${this.dateOfDeparture}`;
        } else {
          this.query += `&departureTimeSearch=${this.dateOfDeparture}`;
        }
      }
      if (this.dateOfArrival != '') {
        if (this.query == '') {
          this.query = `arrivalTimeSearch=${this.dateOfArrival}`;
        } else {
          this.query += `&arrivalTimeSearch=${this.dateOfArrival}`;
        }
      }

      this.flightService
        .getFlightsByDatesDepartureAndDestination(this.query)
        .subscribe((data) => {
          console.log(this.query);
          this.searchedflights = data;
          console.log(this.searchedflights);
          this.searchedflights.forEach((element) => {
            element.timeOfArrival = new Date(element.timeOfArrival);
            var dateString =
              ('0' + element.timeOfArrival.getUTCDate()).slice(-2) +
              '/' +
              ('0' + (element.timeOfArrival.getUTCMonth() + 1)).slice(-2) +
              '/' +
              element.timeOfArrival.getUTCFullYear() +
              ' ' +
              ('0' + element.timeOfArrival.getUTCHours()).slice(-2) +
              ':' +
              ('0' + element.timeOfArrival.getUTCMinutes()).slice(-2);
            element.timeOfArrival = dateString;
            element.timeOfDeparture = new Date(element.timeOfDeparture);
            var dateString =
              ('0' + element.timeOfDeparture.getUTCDate()).slice(-2) +
              '/' +
              ('0' + (element.timeOfDeparture.getUTCMonth() + 1)).slice(-2) +
              '/' +
              element.timeOfDeparture.getUTCFullYear() +
              ' ' +
              ('0' + element.timeOfDeparture.getUTCHours()).slice(-2) +
              ':' +
              ('0' + element.timeOfDeparture.getUTCMinutes()).slice(-2);
            element.timeOfDeparture = dateString;
          });
        });
    }
  }
}
