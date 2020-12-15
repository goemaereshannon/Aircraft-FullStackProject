import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flight.service';
import { ReservationService } from '../../../services/reservation.service';
import { Reservation } from '../reservation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Flight } from 'presentations/flight/flight';
import { UserService } from 'services/user.service';

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
    private formBuilder: FormBuilder,
    private userService: UserService
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
    this.infoForm.patchValue({
      firstName: this.userService.loggedInUser.firstName,
      lastName: this.userService.loggedInUser.lastName,
    });
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
