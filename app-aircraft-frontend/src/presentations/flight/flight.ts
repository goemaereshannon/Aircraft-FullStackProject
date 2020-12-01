import { Time } from '@angular/common';

export interface Flight{
    // public Guid Id { get; set; } = Guid.NewGuid();
    // public DateTime TimeOfDeparture { get; set; }
    // public DateTime TimeOfArrival { get; set; }
    // public string FlightStatus { get; set; } = "On time"; 

    // public DepartureDTO DepartureDTO { get; set; } 
    // public DestinationDTO DestinationDTO { get; set; }
    // public AirplaneDTO AirplaneDTO { get; set; }
    id: string, 
    timeOfDeparture: Date, 
    timeOfArrival: Time, 
    flightStatus: string, 
    departure: {
        location: {
            city: string, 
            country: string, 
            airport: string
        }
    }, 
    destination: {
        location: {
            city: string, 
            country: string, 
            airport: string
        }
    }, 
    airplane:{
        name: string, 
        type: string, 
        totalSeats: number
    }

}