using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewServices.Models
{
    public class Review
    {
        public Review() //serialisering
        {

        }
        [BsonId] public ObjectId Id { get; set; } = new ObjectId();

        //[BsonElement]
        //public SubjectCategorie Subject { get; set; }
        [BsonElement]
        public string Subject { get; set; }
        [BsonElement]
        public string Comment { get; set; }
        [BsonElement("Rating")]
        [BsonRepresentation(BsonType.Decimal128)]
        
        public decimal Rating { get; set; }

        [BsonElement("DateOfCreation")]
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime DateOfCreation { get; set; }

        
        [BsonElement("userId")]
        [BsonRepresentation(BsonType.String)]
        public Guid UserId { get; set; }

        //navigatie property
        [BsonElement("flightId")]
        [BsonRepresentation(BsonType.String)]
        public Guid FlightId { get; set; }

    }
}
