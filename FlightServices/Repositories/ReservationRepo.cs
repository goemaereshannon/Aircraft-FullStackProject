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
    public class ReservationRepo: GenericRepo<Reservation>, IReservationRepo
    {

        private readonly FlightServicesContext context;
        public ReservationRepo(FlightServicesContext _context) : base(_context)
        {
            this.context = _context;
        }
        public  async Task<Reservation> GetAsyncByGuidWithAllSubModels(Guid Id)
        {
            //enkel bruikbaar bij een guid Key
            return await _context.Set<Reservation>()
                .Include(res => res.Flight).ThenInclude(fl => fl.Destination).ThenInclude(dest => dest.Location)
                .Include(res => res.Flight).ThenInclude(fl => fl.Departure).ThenInclude(dep => dep.Location)
                .Include(res => res.Flight).ThenInclude(fl => fl.Airplane)
                .Include(res => res.ReservedSeats)
                .ThenInclude(resseat => resseat.Price)
                .Include(resseat => resseat.ReservedSeats)
                .ThenInclude(resseat => resseat.Person)
                 .FirstOrDefaultAsync(res => res.Id == Id);

        }
        public override async Task<IEnumerable<Reservation>> GetAllAsync()
        {
            return await context.Reservations.Include(res => res.ReservedSeats).ToListAsync();
        }
        public override async Task<IEnumerable<Reservation>> GetByExpressionAsync(Expression<Func<Reservation, bool>> expression)
        {
            //voorbeeld bij search: expression = "p => p.ProductID == id"  -- je kent immers de ID property niet.
            //returnt wel een collectie! Gebruik desnoods First().
          return await this._context.Set<Reservation>().Where(expression).AsNoTracking()
                .Include(res => res.Flight)
                .ThenInclude(fl => fl.Destination)
                .Include(res => res.Flight)
                .ThenInclude(fl => fl.Departure)
                .Include(res => res.ReservedSeats)
                .ThenInclude(resseat => resseat.Price)
                .Include(resseat => resseat.ReservedSeats)
                .ThenInclude(resseat => resseat.Person)
                .ToListAsync();
     
        }
    }
}
