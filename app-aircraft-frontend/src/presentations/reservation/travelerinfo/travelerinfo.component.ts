import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight/flight.service';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
import { FormBuilder } from '@angular/forms';

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
  infoForm;

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
