import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FlightService } from './flight.service';
import { Reservation } from '../presentations/reservation/reservation';

var baseURL = `${environment.baseUrl}flight/`;

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  flight;
  constructor(private flightService: FlightService, private http: HttpClient) {}
  ngOnInit(): void {
    console.log(this.flight);
  }

  postReservation(reservation: Reservation): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<Reservation>(
        `${baseURL}reservations`,
        JSON.stringify(reservation),
        { headers }
      )
      .pipe(
        tap((data) => console.log('reservationBooked' + JSON.stringify(data))),
        catchError(this.handleError<Reservation>('postReservation', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //send error to remote logging infrastructure
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
