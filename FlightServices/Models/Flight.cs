using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Models
{
    public class Flight
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime TimeOfDeparture { get; set; }
        public DateTime TimeOfArrival { get; set; }
        public string FlightStatus { get; set; } = "On time";

        public float Distance { get; set; }
        
        private string _flightduration;

        public string FlightDuration
        {
            get {

                if (_flightduration == "00:00:00" || _flightduration == null && this.TimeOfArrival != null && this.TimeOfDeparture != null)
                {
                    // _flightduration = (this.TimeOfArrival - this.TimeOfDeparture).TryFormat("HH:mm:ss").ToString;
                    TimeSpan timeSpan = TimeOfArrival.Subtract(TimeOfDeparture);
                    
                    return  timeSpan.ToString();
                }
                else
                {
                    return _flightduration;
                }
            }




            set {
                _flightduration = value;
            }
        }


        public Guid? DepartureId { get; set; }
        public Guid? DestinationId { get; set; }
        public Guid? AirplaneId { get; set; }

        
        public virtual Departure Departure { get; set; }
        public virtual Destination Destination { get; set; }
        public virtual Airplane Airplane { get; set; }

        public virtual ICollection<Reservation> Reservations { get; set; }

    }
}
