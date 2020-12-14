using System;
using System.ComponentModel.DataAnnotations;

namespace FlightServices.DTOs
{
    public class SeatDTO
    {
        [DataType(DataType.Text)]
        public string Name { get; set; }
       
        public Guid Id { get; set; }
    }
}