using FlightServices.Data;
using FlightServices.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FlightServices.UnitTests
{
    public class DatabaseInitializer
    {
        public static void Initialize(FlightServicesContext context)
        {
            Seed(context); 
        }

        private static void Seed(FlightServicesContext context)
        {
            var fakeFlights = new[]
            {
                new Flight
                {
                    Id = Guid.Parse("e5a74ec1-4185-41e4-befc-155c8bbb5d8e"), 
                    TimeOfDeparture = DateTime.Parse("24/12/2020 13:40"), 
                    TimeOfArrival = DateTime.Parse("24/12/2020 15:00"), 
                    FlightStatus = "On time", 
                    Departure =
                    {
                        Location =  {
                            Id = Guid.NewGuid(), 
                            Country = "Sweden", 
                            City = "Stockholm", 
                            Airport = "ARN"
                        }
                    }, 
                    Destination =
                    {
                        Location =
                        {
                            Id = Guid.NewGuid(), 
                            Country = "Belgium", 
                            City = "Charleroi", 
                            Airport = "CRL"
                        }
                    }, 
                    Airplane =
                    {
                        Id = Guid.NewGuid(), 
                        Name = "CH7652", 
                        Type = "Boejing", 
                        TotalSeats = 200

                    }
    }, 
            };
            context.Flights.AddRange(fakeFlights);
            context.SaveChanges(); 
        }
    }
}
