import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: ['./availableflights.component.scss'],
})
export class AvailableflightsComponent implements OnInit {
  searchForm;
  departure;
  destination;
  dateOfDeparture;
  dateOfArrival;
  query = '';
  searchedFlights;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.searchForm = history.state.data;
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
        console.log('Op op. Alles is op');
        this.flightService.getFlights().subscribe((data) => {
          this.searchedFlights = data;
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
      // this.flightService.getDepartures().subscribe(data => {
      //   console.log(data);
      //   this.departures = data;
      // }, error => {console.error({error})});
      this.flightService
        .getFlightsByDatesDepartureAndDestination(this.query)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
