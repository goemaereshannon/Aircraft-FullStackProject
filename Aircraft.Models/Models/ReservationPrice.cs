using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class ReservationPrice
    {
        public Guid ReservationId { get; set; }
        public Reservation Reservation { get; set; }
        public Guid PriceId { get; set; }
        public Price Price { get; set; }
    }
}
