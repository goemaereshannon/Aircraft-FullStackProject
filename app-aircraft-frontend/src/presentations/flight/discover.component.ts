import {Component} from '@angular/core'; 
import {FlightService} from './flight.service'


console.log("DISCOVER"); 
@Component({
    selector: 'app-discover', 
    templateUrl: './discover.component.html', 
    styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {
    ngOnInit(): void{
        var result = this.flightService.getTodaysFlights(); 
        console.log({result}); 
    }
    constructor(private flightService: FlightService){}; 
    // todaysflights(): void{
        
    // }
}