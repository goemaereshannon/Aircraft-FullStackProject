﻿

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Reservation
    {
       
        //public double TotalPrice { get; set; }

        public Guid FlightId { get; set; }
        public Guid UserId { get; set; }


        

        
        //one to one relationship
        public virtual Flight Flight { get; set; }

        //one to many relationship
        public ICollection<ReservedSeat> ReservedSeats { get; set; }

        //calculated properties for total # of seats and total price of reservation
        public int TotalSeats { get { return this.ReservedSeats.Count(); } }
        public double TotalPrice { get { return ReservedSeats.Sum(rs => rs.Price.Value); } }

        //public string DepartureCity { get; set; }
        //public string DestinationCity { get; set; }
        //public DateTime DepartureTime { get; set; }
        //public DateTime ArrivalTime { get; set; }
        //public ICollection<ReservationPrice> ReservationPrices { get; set; }
        //public ICollection<ReservationSeat> ReservationSeats { get; set; }
    }
}