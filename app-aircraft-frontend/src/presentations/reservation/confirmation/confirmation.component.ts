import { Component, OnInit } from '@angular/core';
import { Flight } from 'presentations/flight/flight';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  flight: Flight;
  reservation: Reservation;
  constructor() {}

  ngOnInit(): void {}
}
