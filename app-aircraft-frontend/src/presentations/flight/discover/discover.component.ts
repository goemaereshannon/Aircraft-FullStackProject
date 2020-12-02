import { Component, OnInit } from '@angular/core';
import {FlightService} from '../flight.service'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss', '../../../app/app.component.scss']
})
export class DiscoverComponent implements OnInit {
  flightstoday; 
  

  constructor(private flightService: FlightService) { }
  
  ngOnInit(): void {
    this.flightService.getFlightsToday().subscribe(data => {
      this.flightstoday = data;
    }, error => {console.error({error})});
  }

}
