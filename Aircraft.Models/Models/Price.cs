using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Price
    {
        public Guid Id { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public double Value { get; set; }

        public Guid? ClassId { get; set; }
        public Guid FlightId { get; set; }

        public Flight Flight { get; set; }
        public Class Class { get; set; }

 
        public ICollection<ReservationPrice> ReservationPrices { get; set; }
    }
}
