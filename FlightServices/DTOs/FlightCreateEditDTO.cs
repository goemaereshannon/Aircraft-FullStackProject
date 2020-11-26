using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class FlightCreateEditDTO
    {
        public DateTime TimeOfDeparture { get; set; }
        public DateTime TimeOfArrival { get; set; }

        public DepartureDTO DepartureDTO { get; set; }
        public DestinationDTO DestinationDTO { get; set; }
        public AirplaneDTO AirplaneDTO { get; set; }
    }
}
