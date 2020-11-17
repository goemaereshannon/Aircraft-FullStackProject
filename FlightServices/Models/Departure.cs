using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Departure
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid LocationId { get; set; }

        public virtual Location Location { get; set; }


        public ICollection<Flight> Flights { get; set; }
    }
}
