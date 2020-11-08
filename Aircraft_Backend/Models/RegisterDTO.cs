using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.API.Models
{
    public class RegisterDTO
    {
        /// <summary>Your email</summary>
        /// <example> alexandra.christiaens@student.howest.be</example>
        [Required]
        public string Email { get; set; }

        /// <summary>Your Password</summary>
        /// <example>-Azerty123</example>
        [Required]
        public string Password { get; set; }

        /// <summary>Your Password</summary>
        /// <example>-Azerty123</example>
        [Required]
        public string ConfirmPassword { get; set; }
    }
}
