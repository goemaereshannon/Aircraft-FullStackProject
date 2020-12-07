using IdentityServices.DTO_s;
using System;
using System.ComponentModel.DataAnnotations;

namespace IdentityServices.Controllers
{
    public class RegisterDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

       // public string SocialSecurityNumber { get; set; } //has to be editable
        [Required]
        public string Email { get; set; }

      //  public AddressDTO  AddressDTO { get; set; }
       // public string BirthDate { get; set; }

        [Required]
        public string Password { get; set; }

       
        
    }

}