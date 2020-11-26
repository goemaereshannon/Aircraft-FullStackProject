
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Location
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Country { get; set; }
        public string City { get; set; }
        public string Airport { get; set; }

        //navigation properties
        public ICollection<Departure> Departures { get; set; }
        public ICollection<Destination> Destinations { get; set; }
    }
}
