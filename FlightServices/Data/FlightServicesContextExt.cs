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
        public static FlightServicesContext _context { get; set; }
        private  static Guid UserId { get; set; } = new Guid("3fa85f64-5717-4562-b3fc-2c963f66afa6");

        public static async Task SeedAsync(this ModelBuilder modelBuilder)
        {
            try
            {
                modelBuilder.Entity<Flight>().HasData(_flightsData);
                modelBuilder.Entity<Departure>().HasData(_departureData);
                modelBuilder.Entity<Destination>().HasData(_destinationData);
                modelBuilder.Entity<Location>().HasData(_locationData);
               

                await MakeSeats();

                await MakeReservations();

                modelBuilder.Entity<PriceClass>().HasData(_priceData);
                modelBuilder.Entity<Person>().HasData(_personData);
               
              //  await MakeReservedSeats();
          
                modelBuilder.Entity<ReservedSeat>().HasData(_reservedSeatData);
                modelBuilder.Entity<Reservation>().HasData(_reservationData);
               
                modelBuilder.Entity<Seat>().HasData(_seatData);
                modelBuilder.Entity<Airplane>().HasData(_airplaneData);
                // modelBuilder.Entity<Reservation>().HasData(_reservationData);
                //TODO: seed prices
                //TODO: seed reservations
                //TODO: seed reserved seats
            }
            catch (Exception e)
            {
                Debug.WriteLine(e);
                throw;
            }

        }

        private static Task MakeReservedSeats()
        {
            throw new NotImplementedException();
        }

        private static  async Task MakeReservations()
        {
          
            foreach(Flight flight in _flightsData)
            {

                List<ReservedSeat> reservedSeats = new List<ReservedSeat>();
                Reservation reservation = new Reservation
                {
                    FlightId = flight.Id,
                    UserId = UserId,
                };

                for (var i = 0; i< _personData.Count(); i++)
                {
                    Seat freeSeat = _seatData.Where(se => se.AirplaneId == flight.AirplaneId && se.Reserved == false).ToList()[0];
                    PriceClass price = _priceData.Where(price => price.BeginDate <= DateTime.Now && price.EndDate >= DateTime.Now).FirstOrDefault();
                    ReservedSeat reservedSeat = new ReservedSeat
                    {

                        SeatId = freeSeat.Id,
                        PriceId = price.Id,
                        PersonId = _personData[i].Id,
                        ReservationId = reservation.Id,
                        TicketPrice = Math.Round((price.Value * flight.DistanceInKm / 1000), 2)



                    };
                   
                    
                    freeSeat.Reserved = true;
                    reservation.TotalPrice += reservedSeat.TicketPrice;
                    reservation.TotalSeats += 1;
                    reservedSeats.Add(reservedSeat);
                }
                
                _reservedSeatData.AddRange(reservedSeats);
               _reservationData.Add(reservation);
                _airplaneData.Where(ap => ap.Id == flight.AirplaneId).FirstOrDefault().ReservedSeats = reservedSeats.Count();
                
            }
            
            
        }

        private static async  Task MakeSeats()
        {
           foreach(Airplane airplane in _airplaneData)
            {
                //for (var i = 0; i<airplane.TotalSeats; i++)
                //    {

                //    }

                List<Seat> seats = new List<Seat>
                {
                    new Seat
                    {
                         Name = "C6",
                    AirplaneId = airplane.Id
                    },
                    new Seat
                    {
                        Name= "B6",
                        AirplaneId = airplane.Id
                    },
                     new Seat
                    {
                        Name= "A6",
                        AirplaneId = airplane.Id
                    }, new Seat
                    {
                        Name= "F7",
                        AirplaneId = airplane.Id
                    },new Seat
                    {
                        Name= "E7",
                        AirplaneId = airplane.Id
                    },new Seat
                    {
                        Name= "A20",
                        AirplaneId = airplane.Id
                    },

                };

                _seatData.AddRange( seats);
                airplane.TotalSeats = seats.Count();
               
            }
           
        }

        //testdata
        private readonly static List<Flight> _flightsData = new List<Flight>
        {
            new Flight
            {
                Id= new Guid("d470123f-7795-4158-aa2b-9088e29de88d"),
                //TimeOfDeparture = DateTime.Parse("15-12-2020T16:00:00Z"),
                TimeOfDeparture = DateTime.Parse("2020-12-15T16:00:00Z"),
                TimeOfArrival = DateTime.Parse("2020-12-15T18:00:00Z"),
                DepartureId = new Guid("79A86C66-F7E4-4BC4-9E01-525AD78754BD"),
                DestinationId = new Guid("628B89E3-FFD4-4659-BA39-C67EEE11672B"),
                AirplaneId = new Guid("9E17AF7B-DF05-4C69-94B8-586659C7152F"),
                FlightStatus = "On time",
            DistanceInKm = 263.85F
            },
            new Flight
            {
                Id = new Guid("33478a6b-437f-4416-932d-638b1c0415ea"),
                 TimeOfDeparture = DateTime.Parse("2020-12-20T15:00:00Z"),
                TimeOfArrival = DateTime.Parse("2020-12-20T15:30:00Z"),
                DepartureId = new Guid("0AE2E025-10A8-4437-8A5B-9DDFFC77C180"),
                DestinationId = new Guid("120DFA74-5A34-42DF-8C5D-345E3EC82458"),
                AirplaneId = new Guid("9579B6CD-CAD5-4608-88A6-270CE03F5A35"),
               // FlightDuration = "05:00:00",
                FlightStatus = "On time", 
                DistanceInKm = 5885

            }
            ,
            new Flight
            {
                Id = new Guid("e8fa7a35-e04c-4935-b11a-c1ef7d3640c4"),
                 TimeOfDeparture = DateTime.Parse("2020-12-20T15:00:00Z"),
                TimeOfArrival = DateTime.Parse("2020-12-20T15:30:00Z"),
                DepartureId = new Guid("0AE2E025-10A8-4437-8A5B-9DDFFC77C180"),
                DestinationId = new Guid("120DFA74-5A34-42DF-8C5D-345E3EC82458"),
                AirplaneId = new Guid("b9db76ad-8665-42c8-8282-49d181cebd01"),
               // FlightDuration = "05:00:00",
                FlightStatus = "On time",
                DistanceInKm = 5885

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
               // TotalSeats = 4
            },
            new Airplane
            {
                Id = new Guid("9E17AF7B-DF05-4C69-94B8-586659C7152F"),
                Name = "BA2490",
                Type = "Boeing 737 MAX",
                //TotalSeats = 4
            },
                        new Airplane
            {
                Id = new Guid("b9db76ad-8665-42c8-8282-49d181cebd01"),
                Name = "BA2490",
                Type = "Boeing 737 MAX",
                //TotalSeats = 4
            }
        };

        private readonly static List<Seat> _seatData = new List<Seat> ();
        private readonly static List<ReservedSeat> _reservedSeatData = new List<ReservedSeat> ();
       
        private readonly static List<PriceClass> _priceData = new List<PriceClass> {

            new PriceClass
            {
                Value = 300
               
            },
             new PriceClass
            {
                Value = 350,
                
                BeginDate = DateTime.Now.AddMonths(3),
                EndDate = DateTime.Now.AddMonths(6)
               
            }

        };

        private readonly static List<Person> _personData = new List<Person>
        {
            new Person
            {
                Id = UserId,
                FirstName = "Alex",
                LastName = "Christiaens"
        
            },
               new Person
            {
                
                FirstName = "Shannon",
                LastName = "Goemaere"

            },
               new Person
               {
                   FirstName = "R.",
                   LastName = "Destatsbader"
               },
               new Person {FirstName ="M.",LastName="Frey-Alvarez"}

        };
        private readonly static List<Reservation> _reservationData = new List<Reservation>();

    }
}
