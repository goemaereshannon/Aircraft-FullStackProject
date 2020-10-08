using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft_Backend.Models
{
    public class Airplane
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int TotalSeats { get; set; }

        public ICollection<Flight> Flights { get; set; }
        public ICollection<Seat> Seats { get; set; }
        public ICollection<AirplaneClass> AirplaneClasses { get; set; }
    }
}
