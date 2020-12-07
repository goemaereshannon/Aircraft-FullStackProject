using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class ReservationSeat
    {
        public Guid? ReservationId { get; set; }
        public Reservation Reservation { get; set; }
        public Guid? SeatId { get; set; }
        public Seat Seat { get; set; }

        
        public Guid? CompanionId { get; set; }
     
        public Companion Companion { get; set; }
    }
}
