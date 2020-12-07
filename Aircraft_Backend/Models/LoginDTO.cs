using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.API.Models
{
    public class LoginDTO
    {
        /// <summary>Your Email</summary>
        /// <example>administrator@azgroeninge.be</example>
        [Required]
        public string Email { get; set; }

        /// <summary>Your Password</summary>
        /// <example>wachtwoord</example>
        [Required]
        public string Password { get; set; }
    }
}
