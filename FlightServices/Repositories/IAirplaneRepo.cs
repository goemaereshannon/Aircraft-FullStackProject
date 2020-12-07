using FlightServices.Models;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IAirplaneRepo: IGenericRepo<Airplane>
    {
        Task<Airplane> GetAirplaneByName(string airplaneName);
    }
}