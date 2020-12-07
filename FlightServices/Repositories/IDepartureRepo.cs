using FlightServices.Models;
using System;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IDepartureRepo: IGenericRepo<Departure>
    {
        Task<Departure> GetDepartureWithLocationByDepartureId(Guid departureId);

        Task<Departure> GetDepartureByLocationAirport(string airportcode);
    }
}