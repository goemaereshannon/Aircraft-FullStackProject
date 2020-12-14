import { Time } from '@angular/common';

export interface Destination {
  locationDTO: {
    city: string;
    country: string;
    airport: string;
  };
}

export interface Departure {
  locationDTO: {
    city: string;
    country: string;
    airport: string;
  };
}

export interface Flight {
  id: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  flightStatus: string;
  flightDuration: Time;
  airplaneId: string;
  departureDTO: {
    locationDTO: {
      city: string;
      country: string;
      airport: string;
    };
  };
  destinationDTO: {
    locationDTO: {
      city: string;
      country: string;
      airport: string;
    };
  };
  airplaneDTO: {
    name: string;
    type: string;
    totalSeats: number;
  };
}
