using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft_Backend.Models
{
    public  class AircraftDbContext : IdentityDbContext<IdentityUser>
    { 

        public AircraftDbContext(DbContextOptions<AircraftDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Airplane> Airplanes { get; set; }
        public virtual DbSet<AirplaneClass> AirplaneClasses{ get; set; }
        public virtual DbSet<Class> Classes { get; set; }
        public virtual DbSet<Departure> Departures { get; set; }
        public virtual DbSet<Destination> Destinations { get; set; }
        public virtual DbSet<Flight> Flights { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<Price> Prices { get; set; }
        public virtual DbSet<Reservation> Reservations { get; set; }
        public virtual DbSet<ReservationPrice> ReservationPrices { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AirplaneClass>(entity =>
            {
                entity.HasKey(e => new { e.AirplaneId, e.ClassId });
            });
             builder.Entity<ReservationPrice>(entity =>
            {
                entity.HasKey(e => new { e.ReservationId, e.PriceId });
            });             
            builder.Entity<ReservationSeat>(entity =>
            {
                entity.HasKey(e => new { e.ReservationId, e.SeatId });
            });


            builder.Entity<Flight>().HasMany(f => f.Prices).WithOne(p => p.Flight).HasForeignKey(e => e.FlightId).IsRequired();
            builder.Entity<Location>().HasMany(l => l.Departures).WithOne(d => d.Location).HasForeignKey(d => d.LocationId);
            builder.Entity<Location>().HasMany(l => l.Destinations).WithOne(d => d.Location).HasForeignKey(d => d.LocationId);
            builder.Entity<Destination>().HasMany(d => d.Flights).WithOne(f => f.Destination).HasForeignKey(f => f.DestinationId);
            builder.Entity<Departure>().HasMany(d => d.Flights).WithOne(f => f.Departure).HasForeignKey(f => f.DepartureId);
            builder.Entity<Flight>().HasMany(f => f.Reservations).WithOne(r => r.Flight).HasForeignKey(r => r.FlightId);
            builder.Entity<Airplane>().HasMany(a => a.Flights).WithOne(f => f.Airplane).HasForeignKey(f => f.AirplaneId);
            builder.Entity<Airplane>().HasMany(a => a.Seats).WithOne(s => s.Airplane).HasForeignKey(s => s.AirplaneId);
            builder.Entity<Person>().HasOne(p => p.ReservationSeat).WithOne(r => r.Person);
            


        }

        private Location d(Departure arg)
        {
            throw new NotImplementedException();
        }
    }


}
