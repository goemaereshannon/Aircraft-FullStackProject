import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-travelerseat',
  templateUrl: './travelerseat.component.html',
  styleUrls: [
    './travelerseat.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class TravelerseatComponent implements OnInit {
  flight;
  reservation: Reservation;
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    console.log(history.state.data);
    console.log(history.state.form);
    if (history.state.data != undefined) {
      this.flight = history.state.data;
      //reservation
      this.reservation = this.initializeReservation();
      this.reservation.flightId = this.flight.id;
      this.reservation.userId = '';
      this.reservation.reservedSeats.forEach((element) => {
        element.person.firstName = history.state.form.firstName;
        element.person.lastName = history.state.form.lastName;
      });
    }
  }
  onSubmit(value: string) {
    console.log(value);
  }

  private initializeReservation(): Reservation {
    return {
      flightId: '',
      userId: '',
      reservedSeats: [
        {
          seatId: '',
          priceId: '',
          person: {
            firstName: '',
            lastName: '',
          },
        },
      ],
    };
  }
}
