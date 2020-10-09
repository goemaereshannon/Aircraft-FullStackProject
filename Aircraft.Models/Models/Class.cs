using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Class
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }


        public ICollection<Price> Prices { get; set; }
        public ICollection<AirplaneClass> AirplaneClasses { get; set; }
        public ICollection<Seat> Seats { get; set;  }
    }
}
