using FlightServices.Models;
using System;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IDepartureRepo
    {
        Task<Departure> GetDepartureWithLocationByDepartureId(Guid departureId);

        Task<Departure> GetDepartureByLocationAirport(string airportcode);
    }
}