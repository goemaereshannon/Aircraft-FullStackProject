using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Data
{
    public static class FlightServicesContextExt
    {

        public static async Task SeedAsync(this ModelBuilder modelBuilder)
        {
            try
            {
                modelBuilder.Entity<Flight>().HasData(_flightsData);
                modelBuilder.Entity<Departure>().HasData(_departureData);
                modelBuilder.Entity<Destination>().HasData(_destinationData);
                modelBuilder.Entity<Location>().HasData(_locationData);
                modelBuilder.Entity<Airplane>().HasData(_airplaneData);
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
                throw;
            }

        }

        //testdata
        private readonly static List<Flight> _flightsData = new List<Flight>
        {
            new Flight
            {
                Id= new Guid("d470123f-7795-4158-aa2b-9088e29de88d"),
                TimeOfDeparture = Convert.ToDateTime("15-12-2020 16:00"),
                TimeOfArrival = Convert.ToDateTime("15-12-2020 18:00"),
                DepartureId = new Guid("79A86C66-F7E4-4BC4-9E01-525AD78754BD"),
                DestinationId = new Guid("628B89E3-FFD4-4659-BA39-C67EEE11672B"),
                AirplaneId = new Guid("9E17AF7B-DF05-4C69-94B8-586659C7152F"),
                FlightStatus = "On time"
            },
            new Flight
            {
                Id = new Guid("33478a6b-437f-4416-932d-638b1c0415ea"),
                TimeOfDeparture = Convert.ToDateTime("15-12-2020 15:00"),
                TimeOfArrival = Convert.ToDateTime("15-12-2020 15:30"),
                DepartureId = new Guid("0AE2E025-10A8-4437-8A5B-9DDFFC77C180"),
                DestinationId = new Guid("120DFA74-5A34-42DF-8C5D-345E3EC82458"),
                AirplaneId = new Guid("9579B6CD-CAD5-4608-88A6-270CE03F5A35"),
                FlightDuration = "05:00:00",
                FlightStatus = "On time"
            }
        };
        private readonly static List<Departure> _departureData = new List<Departure>
        {
            new Departure
            {
                Id = new Guid("4A3D26C2-1665-4281-B87B-2538E2A02459"),
                LocationId = new Guid("C9693B96-3985-4DD5-872B-13B0D3B46F91"),
            },
            new Departure
            {
                Id = new Guid("0AE2E025-10A8-4437-8A5B-9DDFFC77C180"),
                LocationId = new Guid("13AFE0E4-58DA-472E-93F2-4CC67A771143"),
            },
            new Departure
            {
                Id =new Guid("79A86C66-F7E4-4BC4-9E01-525AD78754BD"),
                LocationId = new Guid("97705F2E-526C-4A26-B240-C2DCE5AECCC5"),
            }
        };
        private readonly static List<Destination> _destinationData = new List<Destination>
        {
            new Destination
            {
                Id = new Guid("120DFA74-5A34-42DF-8C5D-345E3EC82458"),
                LocationId = new Guid("C9693B96-3985-4DD5-872B-13B0D3B46F91"),
            },
            new Destination
            {
                Id = new Guid("628B89E3-FFD4-4659-BA39-C67EEE11672B"),
                LocationId = new Guid("13AFE0E4-58DA-472E-93F2-4CC67A771143")
            },
             new Destination
            {
                Id = new Guid("476F0B19-1A84-4E38-A864-9465944423B7"),
                LocationId = new Guid("97705F2E-526C-4A26-B240-C2DCE5AECCC5")
            }
        };
        private readonly static List<Location> _locationData = new List<Location>
        {
            new Location
            {
                Id= new Guid("C9693B96-3985-4DD5-872B-13B0D3B46F91"),
                Country = "France",
                City = "Paris",
                Airport ="CDG"
            },
            new Location
            {
                Id= new Guid("13AFE0E4-58DA-472E-93F2-4CC67A771143"),
                Country = "Belgium",
                City = "Brussels",
                Airport ="BRU"

            },
            new Location
            {
                Id= new Guid("97705F2E-526C-4A26-B240-C2DCE5AECCC5"),
                Country = "United States of America",
                City = "New York",
                Airport ="JFK"
            }
        };
        private readonly static List<Airplane> _airplaneData = new List<Airplane>
        {
            new Airplane
            {
                Id = new Guid("9579B6CD-CAD5-4608-88A6-270CE03F5A35"),
                Name = "KL1730",
                Type = "Embraer 190", 
                TotalSeats = 200
            },
            new Airplane
            {
                Id = new Guid("9E17AF7B-DF05-4C69-94B8-586659C7152F"),
                Name = "BA2490",
                Type = "Boeing 737 MAX",
                TotalSeats = 200
            }
        };

        }
        
}
