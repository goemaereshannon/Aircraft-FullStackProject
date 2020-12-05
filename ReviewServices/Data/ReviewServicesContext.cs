using MongoDB.Driver;

using ReviewServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewServices.Data
{
    public class ReviewServicesContext
    {
        public IMongoDatabase Database;
        public ReviewServicesContext(IMongoSettings settings)
        {
            MongoClient client = new MongoClient(settings.ConnectionStringHost);
            Database = client.GetDatabase(settings.DatabaseName);
        }
        //namen van collecties zijn casesensitive !!!
       // public IMongoCollection<Restaurant> Restaurants => Database.GetCollection<Restaurant>("restaurants");
        public IMongoCollection<Review> Reviews => Database.GetCollection<Review>("reviews");
    }
}
