using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft_Backend.Models
{
    public class Person
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public virtual IdentityUser IdentityUser { get; set; }
        public ReservationSeat ReservationSeat { get; set; }
    }
}
