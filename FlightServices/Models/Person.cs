using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FlightServices.Models
{
    public class Person
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
       // public Guid ReservedSeatId { get; set; }
        public virtual ICollection<ReservedSeat> ReservedSeats { get; set; }
    }
}