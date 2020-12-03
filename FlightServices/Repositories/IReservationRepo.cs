using FlightServices.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IReservationRepo: IGenericRepo<Reservation>
    {
      //  Task<IEnumerable<Reservation>> GetAllAsync();

    }
}