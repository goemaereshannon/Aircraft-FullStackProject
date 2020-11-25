
using Microsoft.EntityFrameworkCore;
using ReservationServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReservationServices.Data
{
    public class ReservationDbContext: DbContext
    {
        public ReservationDbContext(DbContextOptions<ReservationDbContext> options): base(options)
        {

        }
        public virtual DbSet<Price> Prices { get; set; }
        public virtual DbSet<Reservation> Reservations{ get; set; }
        public virtual DbSet<Seat> Seats { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ReservationPrice>(entity =>
            {
                entity.HasKey(e => new { e.ReservationId, e.PriceId });
            });
            builder.Entity<ReservationSeat>(entity =>
            {
                entity.HasKey(e => new { e.ReservationId, e.SeatId });
            });
        }
    }
}
