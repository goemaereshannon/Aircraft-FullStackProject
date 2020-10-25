using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.API.Models
{
    public class ResetPasswordDTO
    {
        /// <summary>Your email</summary>
        /// <example> J.Doe@hotmail.com</example>
        [Required]
        public string Email { get; set; }

        /// <summary>Your old password</summary>
        /// <example>old password</example>
        [Required]
        public string OldPassword { get; set; }

        /// <summary>Your new password</summary>
        /// <example>new password</example>
        [Required]
        public string Password { get; set; }

        /// <summary>Your new password</summary>
        /// <example>new password</example>
        [Required]
        public string PasswordComfirmation { get; set; }
    }
}
