import {Component, OnInit} from '@angular/core'; 
import {FlightService} from './flight.service'

console.log("DISCOVERRR")

@Component({
    selector: 'app-discover', 
    templateUrl: './discover.component.html', 
    styleUrls: ['./discover.component.scss', '../../app/app.component.scss']
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