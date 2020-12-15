import { Component, OnInit } from '@angular/core';
import { Reservation } from 'presentations/reservation/reservation';
import { ReservationService } from 'services/reservation.service';
import { UserService } from 'services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../app/app.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private reservationService: ReservationService
  ) {}

  bookedReservations: Array<Reservation>;

  ngOnInit(): void {
    this.getReservations();
  }
  getReservations(): void {
    console.log('getReservation');
    this.bookedReservations = [] as Array<Reservation>;

    this.reservationService
      .getReservationById(this.userService.UserId)
      .subscribe({
        next: (data) =>
          data.forEach((element) => {
            this.bookedReservations.push(element);
          }),
        error: (err) => {
          console.log(err);
        },
      });
    console.log({ geboekt: this.bookedReservations });
  }
}
