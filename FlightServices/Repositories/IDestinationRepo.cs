using FlightServices.Models;
using System;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IDestinationRepo
    {
        Task<Destination> GetDestinationWithLocationByDestinationId(Guid destinationId); 
    }
}