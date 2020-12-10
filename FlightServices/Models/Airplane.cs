using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Airplane
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; } 
        public string Type { get; set; }
        public int TotalSeats { get; set; } =0;
        public int ReservedSeats { get; set; } = 0;

        public ICollection<Flight> Flights { get; set; }

        public ICollection<Seat> Seats { get; set; }
         }

 
}
