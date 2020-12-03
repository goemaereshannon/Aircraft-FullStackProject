using FlightServices.Data;
using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public class FlightRepo : GenericRepo<Flight>, IFlightRepo
    {
        public FlightServicesContext _context { get; set; }

        //ctor dependancy van de applicatie context:
        public FlightRepo(FlightServicesContext context) : base(context)
        {
            this._context = context;
        }

        public override async Task<Flight> GetAsyncByGuid(Guid Id)
        {
            //enkel bruikbaar bij een guid Key
           return await _context.Set<Flight>()   
                .Include(fl => fl.Airplane)
                .Include(fl => fl.Destination).ThenInclude(dest => dest.Location)
                .Include(fl => fl.Departure).ThenInclude(dep => dep.Location).AsNoTracking()
                .FirstOrDefaultAsync(fl => fl.Id == Id);
               
        }
        //TDOO: andere benaming
    //    public override async Task<IEnumerable<Flight>> GetByExpressionAsync(Expression<Func<Flight, bool>> expression)
    //    {
    //        //voorbeeld bij search: expression = "p => p.ProductID == id"  -- je kent immers de ID property niet.
    //        //returnt wel een collectie! Gebruik desnoods First().
    //        return await this._context.Set<Flight>().Where(expression).AsNoTracking()
    //            .Include(fl => fl.Airplane)
    //            .Include(fl => fl.Destination).ThenInclude(dest => dest.Location)
    //            .Include(fl => fl.Departure).ThenInclude(dep => dep.Location)
    //            .ToListAsync();
    //    }
    }
}
