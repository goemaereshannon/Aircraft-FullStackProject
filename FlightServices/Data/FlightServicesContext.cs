using FlightServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Data
{
    public class FlightServicesContext: DbContext 
    {
        public FlightServicesContext()
        {

        }
        public FlightServicesContext(DbContextOptions<FlightServicesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Airplane> Airplanes { get; set; }
        public virtual DbSet<Departure> Departures { get; set; }
        public virtual DbSet<Destination> Destinations { get; set; }
        public virtual DbSet<Flight> Flights { get; set; }
        public virtual DbSet<Location> Locations { get; set; }


        public virtual DbSet<PriceClass> Prices { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }
        public virtual DbSet<Reservation> Reservations { get; set; }
        public virtual DbSet<ReservedSeat> ReservedSeats { get; set; }
        public virtual DbSet<Person> Persons { get; set; }

        //public virtual DbSet<ReservationPrice> ReservationPrices { get; set; }
        //public virtual DbSet<ReservationSeat> ReservationSeats { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
           
            base.OnModelCreating(builder);

            builder.Entity<Location>().HasMany(l => l.Departures).WithOne(d => d.Location).HasForeignKey(dp => dp.LocationId).IsRequired();
            builder.Entity<Location>().HasMany(l => l.Destinations).WithOne(d => d.Location).HasForeignKey(de => de.LocationId).IsRequired();

            builder.Entity<Departure>().HasMany(d => d.Flights).WithOne(f => f.Departure).HasForeignKey(f  => f.DepartureId);

            builder.Entity<Destination>().HasMany(d => d.Flights).WithOne(f => f.Destination).HasForeignKey(f => f.DestinationId);

            builder.Entity<Airplane>().HasMany(l => l.Flights).WithOne(d => d.Airplane).HasForeignKey(f => f.AirplaneId);
            builder.Entity<Airplane>().HasMany(a => a.Seats).WithOne(s => s.Airplane).HasForeignKey(s => s.AirplaneId);

            builder.Entity<Flight>().HasMany(fl => fl.Reservations).WithOne(res => res.Flight).HasForeignKey(res => res.FlightId);

          //  builder.Entity<Reservation>().HasKey(res => new { res.FlightId, res.UserId });
            

            builder.Entity<ReservedSeat>().HasOne(rs => rs.Reservation).WithMany(res => res.ReservedSeats).HasForeignKey(rs => rs.ReservationId);
            builder.Entity<ReservedSeat>().HasOne(rs => rs.Seat).WithMany(seat => seat.ReservedSeats).HasForeignKey(rs => rs.SeatId);
            builder.Entity<ReservedSeat>().HasOne(rs => rs.Person).WithMany(person => person.ReservedSeats).HasForeignKey(rs => rs.PersonId);
            builder.Entity<ReservedSeat>().HasOne(rs => rs.Price).WithMany(price => price.ReservedSeats).HasForeignKey(rs => rs.PriceId);


         






           builder.SeedAsync().Wait();



        
        }
    }
}
