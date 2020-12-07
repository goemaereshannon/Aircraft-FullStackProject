using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewServices.Models
{
    public class Flight
    {


        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        //navigatie property
        [BsonElement("flightId")]
        [BsonRepresentation(BsonType.String)]
        public Guid FlightId { get; set; }

        public DateTime TimeOfDeparture { get; set; }
        public DateTime TimeOfArrival { get; set; }

        public string DepartureAirport { get; set; }
        public string DestinationAirport { get; set; }

    }
}
