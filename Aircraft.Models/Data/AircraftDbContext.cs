using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace Aircraft.Models.Models
{
    public  class AircraftDbContext : IdentityDbContext<RegisteredUser, IdentityRole<Guid>, Guid>
    { 

        public AircraftDbContext(DbContextOptions<AircraftDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Address> Adresses { get; set; }
        public virtual DbSet<Airplane> Airplanes { get; set; }
       // public virtual DbSet<AirplaneClass> AirplaneClasses{ get; set; }
        public virtual DbSet<Class> Classes { get; set; }
        public virtual DbSet<Companion> Companions { get; set; }
        public virtual DbSet<Departure> Departures { get; set; }
        public virtual DbSet<Destination> Destinations { get; set; }
        public virtual DbSet<Flight> Flights { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        
        public virtual DbSet<RegisteredUser> RegisteredUsers { get; set; }
        public virtual DbSet<Reservation> Reservations { get; set; }
    //    public virtual DbSet<ReservationPrice> ReservationPrices { get; set; }
    //    public virtual DbSet<ReservationSeat> ReservatioSeats { get; set; }

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

            builder.Entity<Location>().HasMany(l => l.Departures).WithOne(d => d.Location).IsRequired();
            builder.Entity<Location>().HasMany(l => l.Destinations).WithOne(d => d.Location).IsRequired();

            builder.Entity<Departure>().HasMany(d => d.Flights).WithOne(f => f.Departure);

            builder.Entity<Destination>().HasMany(d => d.Flights).WithOne(f => f.Destination);

            builder.Entity<Flight>().HasMany(l => l.Prices).WithOne(d => d.Flight).IsRequired();
            builder.Entity<Flight>().HasMany(l => l.Reservations).WithOne(d => d.Flight);

            builder.Entity<Airplane>().HasMany(l => l.Flights).WithOne(d => d.Airplane);
            builder.Entity<Airplane>().HasMany(l => l.Seats).WithOne(d => d.Airplane).IsRequired();

            builder.Entity<Class>().HasMany(l => l.Seats).WithOne(d => d.Class);
            builder.Entity<Class>().HasMany(l => l.Prices).WithOne(d => d.Class);

           // builder.Entity<RegisteredUser>().HasMany(l => l.Persons).WithOne(d => d.User);
            builder.Entity<RegisteredUser>().HasMany(l => l.Reservations).WithOne(d => d.User);

            builder.Entity<ReservationSeat>().HasOne(rs => rs.Companion);
         

        }

    
    }


}
