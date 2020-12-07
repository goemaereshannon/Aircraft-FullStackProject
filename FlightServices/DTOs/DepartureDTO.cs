using FlightServices.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class DepartureDTO
    {
        [Required]
        public LocationDTO LocationDTO { get; set; }
    }
}
