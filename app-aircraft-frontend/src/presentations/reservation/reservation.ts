export interface Reservation {
  flightId: string;
  userId: string;
  reservedSeats: [
    {
      seatId: string;
      priceId: string;
      person: {
        firstName: string;
        lastName: string;
      };
    }
  ];
}
