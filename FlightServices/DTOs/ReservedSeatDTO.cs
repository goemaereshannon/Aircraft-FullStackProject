using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class ReservedSeatDTO
    {
        public Guid SeatId { get; set; }
        public Guid PriceId { get; set; }
        

        public Guid ReservationId { get; set; }
        public PersonDTO Person { get; set; }
    }
}
