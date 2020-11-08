using Aircraft.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Aircraft.Models.Models
{
    public class RegisteredUser : IdentityUser<Guid>, Person
    {

        public Guid PersonId { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string SocialSecurityNumber { get; set; }

        [Required]
        public Address Address { get; set; }

        [Required]
        [DisplayFormat(ApplyFormatInEditMode = false, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime BirthDate { get; set; }

        public int Age
        {
            get
            {
                TimeSpan span = DateTime.Now.Subtract(this.BirthDate);
                return (int)span.TotalDays / 365;
            }
        }
        public ICollection<Reservation> Reservations { get; set; }
        //public ICollection<Companion> Companions { get; set; }

        public virtual ICollection<IdentityUserRole<Guid>> Roles { get; } = new List<IdentityUserRole<Guid>>();

    }
}
