using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class FlightDTO
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime TimeOfDeparture { get; set; }
        public DateTime TimeOfArrival { get; set; }

        public string DepartureCountry { get; set; }
        public string DepartureCity { get; set; }
        public string DestinationCountry { get; set; }
        public string DestinationCity { get; set; }
        public string AirplaneName { get; set; }

    }
}
