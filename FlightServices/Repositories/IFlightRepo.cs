using FlightServices.Data;
using FlightServices.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public interface IFlightRepo: IGenericRepo<Flight>
    {
        FlightServicesContext _context { get; set; }

        Task<IEnumerable<Flight>> GetByExpressionAsync(Expression<Func<Flight, bool>> expression);
    }
}