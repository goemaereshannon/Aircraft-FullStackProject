using IdentityServices.Models;
using System;
using System.Threading.Tasks;

namespace IdentityServices.Repositories
{
    public interface IUserRepo
    {
        Task<User> GetUserWithAddressByUserId(Guid userId);
    }
}