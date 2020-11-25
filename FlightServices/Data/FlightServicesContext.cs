﻿using FlightServices.Models;
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

        protected override void OnModelCreating(ModelBuilder builder)
        {
           
            base.OnModelCreating(builder);

            builder.Entity<Location>().HasMany(l => l.Departures).WithOne(d => d.Location).HasForeignKey(dp => dp.LocationId).IsRequired();
            builder.Entity<Location>().HasMany(l => l.Destinations).WithOne(d => d.Location).HasForeignKey(de => de.LocationId).IsRequired();

            builder.Entity<Departure>().HasMany(d => d.Flights).WithOne(f => f.Departure).HasForeignKey(f  => f.DepartureId);

            builder.Entity<Destination>().HasMany(d => d.Flights).WithOne(f => f.Destination).HasForeignKey(f => f.DestinationId);

            builder.Entity<Airplane>().HasMany(l => l.Flights).WithOne(d => d.Airplane).HasForeignKey(f => f.AirplaneId);
          // builder.SeedAsync().Wait();
        }
    }
}
