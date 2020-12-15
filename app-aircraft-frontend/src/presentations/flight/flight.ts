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
  timeOfDeparture: Time;
  timeOfArrival: Time;
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
  price: {
    id: string;
    beginDate: Date;
    endDate: Date;
    value: number;
    currency: string;
  };
}
