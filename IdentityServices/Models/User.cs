

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServices.Models
{
    public class User:IdentityUser<Guid>
    {
        public override Guid Id { get; set; } = Guid.NewGuid();
      //  [Required]
       // public string CardNumber { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        //public string SocialSecurityNumber { get; set; } //has to be editable

        //[Required]
        //public Address Address { get; set; }

        //[Required]
        //[DisplayFormat(ApplyFormatInEditMode = false, DataFormatString = "{0:dd/MM/yyyy}")]
        //public DateTime BirthDate { get; set; }

        //public int Age
        //{
        //    get
        //    {
        //        TimeSpan span = DateTime.Now.Subtract(this.BirthDate);
        //        return (int)span.TotalDays / 365;
        //    }
        //}
       // public ICollection<Reservation> Reservations { get; set; }

        // Niet <IdentityUserRole> !
        public ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
    }
}
