using System;
using System.ComponentModel.DataAnnotations;

namespace FlightServices.DTOs
{
    public class SeatDTO
    {
        [Key]
        public Guid Id { get; set; }  
        [DataType(DataType.Text)]
        public string Name { get; set; }
     
        public Guid AirplaneId { get; set; }
    }
}