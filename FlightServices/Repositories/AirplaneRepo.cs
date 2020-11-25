using FlightServices.Data;
using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public class AirplaneRepo : GenericRepo<AirplaneRepo>, IAirplaneRepo 
    {
        private readonly FlightServicesContext context;
        public AirplaneRepo(FlightServicesContext _context) : base(_context)
        {
            context = _context;
        }

        public async Task<Airplane> GetAirplaneByName(string airplaneName)
        {
           var airplane =  await _context.Airplanes.Where(a => a.Name.Contains(airplaneName)).FirstOrDefaultAsync();
            return airplane; 
        }
    }
}
