import {Component, OnInit} from '@angular/core'; 
import {FlightService} from './flight.service'


@Component({
    selector: 'app-discover', 
    templateUrl: './discover.component.html', 
    styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit{
    constructor(private flightService: FlightService){}; 

    ngOnInit() {
        this.flightService.getTodaysFlights().subscribe(data => {console.log({data}); }, error => {console.error({error})});
        
    // : void{
        // var result = this.flightService.getTodaysFlights(); 
        // console.log(result); 
    }
    
    // todaysflights(): void{
        
    // }
}