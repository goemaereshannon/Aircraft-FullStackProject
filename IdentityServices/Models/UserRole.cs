using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace IdentityServices.Models
{
    public class UserRole:IdentityUserRole<Guid>
    {
       // public UserRole() : base() { }
        
        public DateTime DateOfentry { get; set; } = DateTime.Now;
        //public override Guid UserId { get => base.UserId; set => base.UserId = User.Id; }
        //public override Guid RoleId { get => base.RoleId; set => base.RoleId = Role.Id; }
        //navigatie properties - many to many --------------------
        public virtual Role Role { get; set; }
        public virtual User User { get; set; }
    }
}
