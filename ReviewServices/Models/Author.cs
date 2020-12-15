using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewServices.Models
{
    public class Author
    {
        public Author() { }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        
        public ObjectId Id { get; set; } = new ObjectId();


        [BsonRepresentation(BsonType.String)] //controleer type in Mongo
        [BsonElement("UserId")]
        public Guid UserId { get; set; } = Guid.NewGuid();
        [BsonElement]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        ////navigatie props – Onbestaand in NoSQL! maar toch bruikbaar in C#-------
        //[BsonIgnoreIfNull]
        //[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
        //public ICollection<Review> Reviews { get; set; }
    }
}
