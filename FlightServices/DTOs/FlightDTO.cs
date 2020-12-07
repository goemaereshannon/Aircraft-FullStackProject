using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class FlightDTO
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime TimeOfDeparture { get; set; }
        public DateTime TimeOfArrival { get; set; }
        public string FlightStatus { get; set; } = "On time"; 

        public DepartureDTO DepartureDTO { get; set; } 
        public DestinationDTO DestinationDTO { get; set; }
        public AirplaneDTO AirplaneDTO { get; set; }

    }
}
