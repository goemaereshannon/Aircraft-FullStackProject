using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Seat
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Guid AirplaneId { get; set; }
        public Guid ClassId { get; set; } = Guid.Parse("3F2504E0-4F89-11D3-9A0C-0305E82C3301");

        public virtual Airplane Airplane { get; set; }
               
        public virtual ICollection<ReservedSeat> ReservedSeats { get; set; }

       
    }
}
