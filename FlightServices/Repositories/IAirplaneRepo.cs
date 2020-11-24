using FlightServices.Models;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IAirplaneRepo
    {
        Task<Airplane> GetAirplaneByName(string airplaneName);
    }
}