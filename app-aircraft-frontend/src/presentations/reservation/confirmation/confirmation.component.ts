import { Component, OnInit } from '@angular/core';
import { Flight } from 'presentations/flight/flight';
import { Reservation } from '../reservation';
import { ReservationService } from '../../../services/reservation.service';
import { UserService } from 'services/user.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: [
    './confirmation.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class ConfirmationComponent implements OnInit {
  flight: Flight;
  reservation: Reservation;
  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.flight = history.state.flightToBook;
    this.reservation = history.state.reservationToMake;
    console.log(this.flight);
    //  this.reservation.userId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  }

  submit(): void {
    console.log({ bookingRes: this.reservation });
    this.reservation.userId = this.userService.UserId;
    console.log({ reservationuser: this.reservation.userId });
    this.reservationService.postReservation(this.reservation).subscribe({
      next: (data) => {
        console.log({ posted: data });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
