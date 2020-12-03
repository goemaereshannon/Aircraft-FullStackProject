using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class ReservedSeat
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        public Guid SeatId { get; set; }
        public Guid PriceId { get; set; }
        public Guid PersonId { get; set; }

        public Guid ReservationId { get; set; }

        public virtual Seat Seat { get; set; }
        public virtual PriceClass Price { get; set; }

        public virtual Person Person { get; set; }

        public virtual Reservation Reservation { get; set; }


        //calculated property for the specific ticketprice of this one seat
        public double TicketPrice { get; set; }
        //public double TicketPrice { 
        //    get 
        //    { 
        //        if( Reservation != null && Reservation.Flight.Distance != 0)
        //        {
        //            return Price.Value * (Reservation.Flight.Distance / 1000);
        //        }
        //        else
        //        {
        //            return 0;
        //        }
        //    }
        //    set
        //    {

        //    }
        //}



    }
}
