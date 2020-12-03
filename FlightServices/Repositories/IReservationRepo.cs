using FlightServices.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IReservationRepo: IGenericRepo<Reservation>
    {
        //  Task<IEnumerable<Reservation>> GetAllAsync();
        Task<Reservation> GetAsyncByGuidWithAllSubModels(Guid Id);
    }
}