import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight, Destination, Departure } from './flight';

var baseURL = "https://localhost:44347/api/"
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }
  getFlightsToday(): Observable<Flight[]>{
    return this.http.get<Flight[]>(`${baseURL}flightstoday`); 
  }

  getDestinations(): Observable<Destination[]>{
    return this.http.get<Destination[]>(`${baseURL}flights/destinations`); 
  }

  getDepartures(): Observable<Departure[]>{
    return this.http.get<Departure[]>(`${baseURL}flights/departures`); 
  }
}
