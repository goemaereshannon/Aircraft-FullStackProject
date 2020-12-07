using FlightServices.Models;
using System;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IDestinationRepo: IGenericRepo<Destination>
    {
        Task<Destination> GetDestinationWithLocationByDestinationId(Guid destinationId);
        Task<Destination> GetDestinationByLocationAirport(string airportcode);
    }
}