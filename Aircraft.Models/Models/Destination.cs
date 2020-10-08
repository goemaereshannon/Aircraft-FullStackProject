using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Destination
    {
        public Guid Id { get; set; }
        public Guid LocationId { get; set; }

        public virtual Location Location { get; set; }

        public ICollection<Flight> Flights { get; set; }
    }
}
