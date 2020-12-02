using FlightServices.Data;
using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public class AirplaneRepo : GenericRepo<Airplane>, IAirplaneRepo
    {
        private readonly FlightServicesContext context;
        public AirplaneRepo(FlightServicesContext _context) : base(_context)
        {
            this.context = _context;
        }

        public async Task<Airplane> GetAirplaneByName(string airplaneName)
        {
            return await context.Airplanes.Where(a => a.Name.Contains(airplaneName)).FirstOrDefaultAsync();
        }
    }
}
