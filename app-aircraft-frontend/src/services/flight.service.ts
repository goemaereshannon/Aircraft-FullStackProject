import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Flight, Destination, Departure } from '../presentations/flight/flight';
import { environment } from '../environments/environment';

var baseURL = 'http://localhost:32820/flight/';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

  //MISC
  convertToTime(element): any {
    element.timeOfArrival = new Date(element.timeOfArrival);
    var dateString =
      ('0' + element.timeOfArrival.getUTCDate()).slice(-2) +
      '/' +
      ('0' + (element.timeOfArrival.getUTCMonth() + 1)).slice(-2) +
      '/' +
      element.timeOfArrival.getUTCFullYear() +
      ' ' +
      ('0' + element.timeOfArrival.getUTCHours()).slice(-2) +
      ':' +
      ('0' + element.timeOfArrival.getUTCMinutes()).slice(-2);
    element.timeOfArrival = dateString;
    element.timeOfDeparture = new Date(element.timeOfDeparture);
    var dateString =
      ('0' + element.timeOfDeparture.getUTCDate()).slice(-2) +
      '/' +
      ('0' + (element.timeOfDeparture.getUTCMonth() + 1)).slice(-2) +
      '/' +
      element.timeOfDeparture.getUTCFullYear() +
      ' ' +
      ('0' + element.timeOfDeparture.getUTCHours()).slice(-2) +
      ':' +
      ('0' + element.timeOfDeparture.getUTCMinutes()).slice(-2);
    element.timeOfDeparture = dateString;
  }

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

  getFutureFlights(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(`${baseURL}flights/future`)
      .pipe(catchError(this.handleError<Flight[]>('getFutureFlights', [])));
  }

  getAvailableSeats(airplaneid): Observable<any[]> {
    console.log({
      link: `${baseURL}flights/airplane/${airplaneid}/seats/nonreserved`,
    });

    return this.http
      .get<any[]>(`${baseURL}flights/airplane/${airplaneid}/seats/nonreserved`)
      .pipe(catchError(this.handleError<any[]>('getAvailableSeats', null)));
  }

  //RESERVATION COMPONENT
  getFlightDetails(id: string): Observable<Flight> {
    return this.http
      .get<Flight>(`${baseURL}flights/${id}`)
      .pipe(catchError(this.handleError<Flight>('getFlightDetails', null)));
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
