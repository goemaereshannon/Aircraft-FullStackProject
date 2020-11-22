using FlightServices.DTOs;
using FlightServices.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IFlightRepo
    {
        Task<IEnumerable<Flight>> GetFlightsByDateBasedOnDestination(FlightSearchDTO flightSearchDTO, IEnumerable<Flight> flightsResult);
    }
}