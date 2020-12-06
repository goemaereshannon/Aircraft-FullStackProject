import { Injectable, OnInit } from '@angular/core';
import { FlightService } from '../flight/flight.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  flight;
  constructor(private flightService: FlightService) {}
  ngOnInit(): void {
    console.log(this.flight);
  }
}
