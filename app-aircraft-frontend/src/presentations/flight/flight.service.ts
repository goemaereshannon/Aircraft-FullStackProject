import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Flight, Destination, Departure } from './flight';

var baseURL = 'http://localhost:32820/flight/';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}
  //DISCOVER COMPONENT
  getFlightsToday(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(`${baseURL}flightstoday`)
      .pipe(catchError(this.handleError<Flight[]>('getFlightsToday', [])));
  }

  getDestinations(): Observable<Destination[]> {
    return this.http
      .get<Destination[]>(`${baseURL}flights/destinations`)
      .pipe(catchError(this.handleError<Destination[]>('getDestinations', [])));
  }

  getDepartures(): Observable<Departure[]> {
    return this.http
      .get<Departure[]>(`${baseURL}flights/departures`)
      .pipe(catchError(this.handleError<Departure[]>('getDepartures', [])));
  }

  //VAN DISCOVER NAAR AVAILABLE FLIGHTS COMPONENT
  getFlightsByDatesDepartureAndDestination(
    query: string
  ): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(`${baseURL}flightsearch?${query}`)
      .pipe(
        catchError(
          this.handleError<Flight[]>(
            'getFlightsByDatesDeparturesAndDestination',
            []
          )
        )
      );
  }

  //AVAILABLE FLIGHTS COMPONENT
  getFlights(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(`${baseURL}flights`)
      .pipe(catchError(this.handleError<Flight[]>('getFlights', [])));
  }

  //AVAILABLE FLIGHTS COMPONENT
  getFlightById(flightId: string): Observable<Flight> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get<Flight>(`${baseURL}flights/${flightId}`, { headers })
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError<Flight>(`getFlightById`))
      );
  }
  //ERROR HANDLING
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //send error to remote logging infrastructure
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
