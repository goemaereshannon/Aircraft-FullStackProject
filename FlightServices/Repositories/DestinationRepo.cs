﻿using FlightServices.Data;
using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public class DestinationRepo : GenericRepo<DestinationRepo>, IDestinationRepo
    {
        private readonly FlightServicesContext context;

        public DestinationRepo(FlightServicesContext _context) : base(_context)
        {
            context = _context;
        }

        public async Task<Destination> GetDestinationWithLocationByDestinationId(Guid destinationId)
        {
            return await _context.Destinations.Include(d => d.Location).Where(u => u.Id == destinationId).FirstOrDefaultAsync();
        }
    }
}