using FlightServices.Data;
using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public class DepartureRepo : GenericRepo<DepartureRepo>, IDepartureRepo
    {
        private readonly FlightServicesContext context; 

        public DepartureRepo(FlightServicesContext _context): base(_context)
        {
            context = _context; 
        }

        public async Task<Departure> GetDepartureWithLocationByDepartureId(Guid departureId)
        {
            return await _context.Departures.Include(d => d.Location).Where(u => u.Id == departureId).AsNoTracking().FirstOrDefaultAsync();
        }

        public async Task<Departure> GetDepartureByLocationAirport(string airportcode)
        {
            return await _context.Departures.Include(d => d.Location).Where(u => u.Location.Airport.Contains(airportcode)).AsNoTracking().FirstOrDefaultAsync();
        }
    }
}
