using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Flight
    {
        public Guid Id { get; set; }
        public DateTime TimeOfDeparture { get; set; }
        public DateTime TimeOfArrival { get; set; }

        public Guid? DepartureId { get; set; }
        public Guid? DestinationId { get; set; }
        public Guid AirplaneId { get; set; }


        public virtual Departure Departure { get; set; }
        public virtual Destination Destination { get; set; }
        public virtual Airplane Airplane { get; set; }

        public ICollection<Price> Prices { get; set; }
        public ICollection<Reservation> Reservations { get; set; }


    }
}
