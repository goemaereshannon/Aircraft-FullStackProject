using Aircraft_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft_Backend
{
    public class Location
    {
        public Guid Id { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Airport { get; set; }

        //navigation properties
        public ICollection<Departure> Departures { get; set; }
        public ICollection<Destination> Destinations { get; set; }
    }
}
