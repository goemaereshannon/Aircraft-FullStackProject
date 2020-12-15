import { Component, OnInit } from '@angular/core';
import { FlightService } from 'presentations/flight/flight.service';
import { getHeapStatistics } from 'v8';
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
  clickedSeat: string;

  constructor(
    private reservationService: ReservationService,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    console.log(history.state.data);
    console.log(history.state.form);
    if (history.state.data != undefined) {
      this.flight = history.state.data;
      //reservation
      this.reservation = this.initializeReservation();
      this.reservation.flightId = this.flight.id;
      this.reservation.userId = '';
      this.flightService
        .getAvailableSeats(this.flight.airplaneId)
        .subscribe((data) => {
          this.getSeats(data);
        });
      //
    }
    if (history.state.form != undefined || history.state.form != null) {
      this.reservation.reservedSeats.forEach((element) => {
        element.person.firstName = history.state.form.firstName;
        element.person.lastName = history.state.form.lastName;
      });
    }
  }
  getSeats(data: Array<any>): void {
    data.forEach((element) => {
      (document.querySelector(`#${element.name}`) as HTMLElement).style.fill =
        '#ffffff';
    });
  }

  seatClicked(value: string) {
    var previousSeat = this.clickedSeat;
    this.clickedSeat = value;
    if (previousSeat != null) {
      (document.querySelector(`#${previousSeat}`) as HTMLElement).style.fill =
        '#ffffff';
    }
    (document.querySelector(`#${this.clickedSeat}`) as HTMLElement).style.fill =
      '#5ab5f9';
  }
  onSubmit(value: string) {
    console.log(value);
    //TODO : hier logica voor wanneer meerdere travellers in 1 keer
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
