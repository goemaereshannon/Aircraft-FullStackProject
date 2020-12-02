using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class CreateReservationDTO
    {

        
        public Guid FlightId { get; set; }
        public Guid UserId { get; set; }





        //one to one relationship
       // public FlightDTO Flight { get; set; }

        //one to many relationship
        public ICollection<ReservedSeatDTO> ReservedSeats { get; set; }

        ////calculated properties for total # of seats and total price of reservation
        //public int TotalSeats { get { return this.ReservedSeats.Count(); } }
        //public double TotalPrice { get { return ReservedSeats.Sum(rs => rs.Price.Value); } }

    }
}
