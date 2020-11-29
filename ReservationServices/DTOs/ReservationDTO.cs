using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReservationServices.DTOs
{
    public class ReservationDTO
    {
        public double TotalPrice { get; set; }

        public Guid FlightId { get; set; }
        public Guid UserId { get; set; }
        //public virtual Flight Flight { get; set; }
        //public virtual RegisteredUser User { get; set; }


        public string DepartureCity { get; set; }
        public string DestinationCity { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        //public ICollection<ReservationPrice> ReservationPrices { get; set; }
        //public ICollection<ReservationSeat> ReservationSeats { get; set; }
    }
}
