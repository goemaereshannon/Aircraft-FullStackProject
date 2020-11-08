﻿
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aircraft.Models.Models
{
    public class Reservation
    {
        public Guid? Id { get; set; }
        public double TotalPrice { get; set; }

        public Guid FlightId { get; set; }
        public Guid UserId { get; set; }
        public virtual Flight Flight { get; set; }
        public virtual RegisteredUser User { get; set; }

        public ICollection<ReservationPrice> ReservationPrices { get; set; }
        public ICollection<ReservationSeat> ReservationSeats { get; set; }
    }
}
