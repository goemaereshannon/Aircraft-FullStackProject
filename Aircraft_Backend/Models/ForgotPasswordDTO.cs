using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.API.Models
{
    public class ForgotPasswordDTO
    {
        /// <summary>Your userid</summary>
        /// <example>5a4929ed-777f-4fa2-89da-fce7243ad70f</example>
        [Required]
        public Guid AdminId { get; set; }

        /// <summary>Your resetcode</summary>
        [Required]
        public string ResetCode { get; set; }

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
