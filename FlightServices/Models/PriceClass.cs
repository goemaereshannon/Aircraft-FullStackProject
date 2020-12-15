using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class PriceClass
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime BeginDate { get; set; } = DateTime.Now;
        public DateTime EndDate { get; set; } = DateTime.Now.AddMonths(3);
        public double Value { get; set; }

        public string Currency { get; set; } = "€";

        public Guid? ClassId { get; set; } = Guid.Parse("3F2504E0-4F89-11D3-9A0C-0305E82C3301");

       // public Guid ReservedSeatId { get; set; }


        public virtual ICollection<ReservedSeat> ReservedSeats { get; set; }



        // public Guid FlightId { get; set; }

        //public Flight Flight { get; set; }
        //public Class Class { get; set; }


        //  public ICollection<ReservationPrice> ReservationPrices { get; set; }
    }
}
