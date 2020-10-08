using Aircraft.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Aircraft.Models.Models
{
    public class Admin : IdentityUser
    {
        public ICollection<Reservation> Reservations { get; set; }
        public ICollection<Person> Persons { get; set; }
    }
}
