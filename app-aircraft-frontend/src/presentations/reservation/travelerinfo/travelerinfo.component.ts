import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flight.service';
import { ReservationService } from '../../../services/reservation.service';
import { Reservation } from '../reservation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Flight } from 'presentations/flight/flight';

@Component({
  selector: 'app-travelerinfo',
  templateUrl: './travelerinfo.component.html',
  styleUrls: [
    './travelerinfo.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class TravelerinfoComponent implements OnInit {
  flight: Flight;
  infoForm: FormGroup;

  constructor(
    private flightService: FlightService,
    private formBuilder: FormBuilder
  ) {
    this.infoForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      passportnr: '',
      addressnr: '',
      postalCity: '',
      country: '',
    });
  }
  ngOnInit(): void {
    if (history.state.data) {
      this.flightService
        .getFlightDetails(history.state.data)
        .subscribe((data) => {
          if (data) {
            this.flight = data;
          }
        });
    }
  }
}
