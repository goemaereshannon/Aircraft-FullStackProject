using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public virtual Admin User { get; set; }
        public ReservationSeat ReservationSeat { get; set; }
    }
}
