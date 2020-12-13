using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.DTOs
{
    public class PriceClassDTO
    {
        
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
        public double Value { get; set; }
        public string Currency { get; set; }
        //TODO: add currency object

        // public Guid? ClassId { get; set; } = Guid.Parse("3F2504E0-4F89-11D3-9A0C-0305E82C3301");

        // public Guid ReservedSeatId { get; set; }


        // public virtual ICollection<ReservedSeat> ReservedSeats { get; set; }
    }
}
