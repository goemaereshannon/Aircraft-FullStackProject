using IdentityServices.Data;
using IdentityServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServices.Repositories
{
    public class UserRepo : GenericRepo<User>, IUserRepo
    {
        private readonly ApplicationDbContext context;

        public UserRepo(ApplicationDbContext _context) : base(_context)
        {
            context = _context;
        }
        public async Task<User> GetUserWithAddressByUserId(Guid userId)
        {
            return await _context.Users.Include(u => u.Address).Where(u => u.Id == userId).FirstOrDefaultAsync();
        }
    }
}
