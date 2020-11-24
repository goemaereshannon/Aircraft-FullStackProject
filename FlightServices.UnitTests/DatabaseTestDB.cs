using FlightServices.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlightServices.UnitTests
{
    public class DatabaseTestDB: IDisposable
    {
        protected readonly FlightServicesContext Context;
        public DatabaseTestDB()
        {
            // gebruik in memory data voor testdata
            // gebruik van context vh te testen project 
            var options = new DbContextOptionsBuilder<FlightServicesContext>().UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;
            // property dependancy voorbereiden 
            Context = new FlightServicesContext(options);

            Context.Database.EnsureCreated(); // seed vanuit standaard API project door SaveChanges Uit te voeren bij OnModelCreating 
            //DatabaseInitializer.Initialize(Context); // extra seeding kan voor test omgeving met FakeData 

        }


        public void Dispose()
        {
            Context.Database.EnsureDeleted();
            Context.Dispose(); 
        }
    }
}
