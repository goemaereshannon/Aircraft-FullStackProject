import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }
  getFlightsToday(): Observable<Flight[]>{
    return this.http.get<Flight[]>("https://localhost:44347/api/flightstoday"); 
  }
}
