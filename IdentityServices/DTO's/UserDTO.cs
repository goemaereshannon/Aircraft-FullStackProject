using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServices.DTO_s
{
    public class UserDTO
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string SocialSecurityNumber { get; set; } //has to be editable


        public AddressDTO AddressDTO { get; set; }

        
        [DisplayFormat(ApplyFormatInEditMode = false, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime BirthDate { get; set; }

       
    }
}
