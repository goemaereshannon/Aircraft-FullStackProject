using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class AirplaneClass
    {
        public int NumberOfSeats { get; set; }

        public Guid ClassId { get; set; }
        public Guid AirplaneId { get; set; }
        public Class Class { get; set; }
        public Airplane Airplane { get; set; }
    }
}
