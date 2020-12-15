import { Time } from '@angular/common';
export interface Review {
  id: {};
  subject: string;
  comment: string;
  rating: number;
  dateOfCreation: Date;
  userId: string;
  flightId: string;
  flight: ReviewedFlight;
  author: Author;
}

export interface ReviewedFlight {
  id: {};
  flightId: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  departureAirport: string;
  destinationAirport: string;
}

export interface Author {
  id: {};
  userId: string;
  firstName: string;
  lastName: string;
}
