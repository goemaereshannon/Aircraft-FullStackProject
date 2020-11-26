using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class AirplaneDTO
    {
        [Required(AllowEmptyStrings = false)]
        public string Name { get; set; }
        public string Type { get; set; }
        public int TotalSeats { get; set; }
    }
}
