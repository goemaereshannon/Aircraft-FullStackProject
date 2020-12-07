using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Seat
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Guid AirplaneId { get; set; }
        public Guid? ClassId { get; set; }

        public virtual Airplane Airplane { get; set; }
        public virtual Class Class { get; set; }

        public ICollection<ReservationSeat> ReservationSeats { get; set; }
    }
}
