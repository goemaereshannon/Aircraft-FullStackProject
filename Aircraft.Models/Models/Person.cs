using System;
using System.Collections.Generic;
using System.Text;

namespace Aircraft.Models.Models
{
   public interface Person
    {
        Guid PersonId { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }

        string SocialSecurityNumber { get; set; }

    
        Address Address { get; set; }

        
      
         DateTime BirthDate { get; set; }

        int Age
        {
            get
            {
                TimeSpan span = DateTime.Now.Subtract(this.BirthDate);
                return (int)span.TotalDays / 365;
            }
        }
    }
}
