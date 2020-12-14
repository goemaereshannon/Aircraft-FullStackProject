export interface Review {
  id: {};
  subject: string;
  comment: string;
  rating: Float32Array;
  dateOfCreation: Date;
  userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
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
