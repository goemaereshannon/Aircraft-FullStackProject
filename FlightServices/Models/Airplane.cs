using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Airplane
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } 
        public string Type { get; set; }
        public int TotalSeats { get; set; }

        public ICollection<Flight> Flights { get; set; }
         }
}
