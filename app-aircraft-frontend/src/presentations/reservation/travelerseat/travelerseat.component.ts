import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'services/flight.service';
import { getHeapStatistics } from 'v8';
import { Reservation } from '../reservation';
import { ReservationService } from '../../../services/reservation.service';
import { Flight } from 'presentations/flight/flight';

@Component({
  selector: 'app-travelerseat',
  templateUrl: './travelerseat.component.html',
  styleUrls: [
    './travelerseat.component.scss',
    '../../../app/app.component.scss',
  ],
})
export class TravelerseatComponent implements OnInit {
  flight: Flight;
  reservation: Reservation;
  clickedSeatId: any;
  clickedSeatName: any;

  constructor(
    private reservationService: ReservationService,
    private flightService: FlightService,
    private router: Router
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

  seatClicked(value: string, id) {
    var previousSeatName = this.clickedSeatName;
    var previouSeatId = this.clickedSeatId;
    this.clickedSeatName = value;
    this.clickedSeatId = id;
    if (previousSeatName != null) {
      (document.querySelector(
        `#${previousSeatName}`
      ) as HTMLElement).style.fill = '#ffffff';
    }
    (document.querySelector(
      `#${this.clickedSeatName}`
    ) as HTMLElement).style.fill = '#5ab5f9';
  }
  onSubmit(value: string) {
    console.log(value);
    //TODO : hier logica voor wanneer meerdere travellers in 1 keer
  }

  toConfirmation() {
    //TODO : loop through multiple persons in reservation
    this.reservation.reservedSeats[0].seatId = this.clickedSeatId;
    console.log({ reservatie: this.reservation });
    this.router.navigate(['/reservation/confirmation'], {
      state: { flightToBook: this.flight, reservationToMake: this.reservation },
    });
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
