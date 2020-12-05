
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MongoDB.Driver;


using ReviewServices.Models;
using ReviewServices.Repos;

namespace ReviewServices.Data
{
    public  class Seeder
    {
    //    private readonly IRestaurantRepo restaurantRepo;
        private readonly IReviewRepo reviewRepo;
        private readonly ReviewServicesContext context;

    //    //Instantie oproepen vanuit Startup>> configure , met registratie in ConfigureServices.
		
       public List<Guid> Lst_FlightGuids { get; set; } = new List<Guid> 
       { 
           new Guid("d470123f-7795-4158-aa2b-9088e29de88d"), 
           new Guid("33478a6b-437f-4416-932d-638b1c0415ea") 
       };
       // public List<Guid> Lst_UserGuids { get; set; } = new List<Guid>
       //{
       //    new Guid("d470123f-7795-4158-aa2b-9088e29de88d"),
       //    new Guid("33478a6b-437f-4416-932d-638b1c0415ea")
       //};

        public  Seeder( IReviewRepo reviewRepo, ReviewServicesContext context)
        {
         
            this.reviewRepo = reviewRepo;
            this.context = context;
        }

        public void initDatabase(int nmbrFlights = 2)
        {
            //geen data blijven toevoegen (MongoDB.Driver)
            try
            {
                //            //2. testRestaurants aanmaken
                //            for (var i = 0; i < nmbrRestaurants; i++)
                //            {

                //                if (!restaurantRepo.CollectionExistsAsync("TestResto" + i).Result)
                //                {

                //                    Guid currentId = Guid.NewGuid();
                //                   Lst_FlightGuids.Add(currentId);

                //                    restaurantRepo.CreateAsync(newFlight
                //                    {
                //                       FlightId = currentId,
                //                        Name = "TestResto" + i,
                //                        Description = "Description TestResto" + i,
                //                        Long = 51 + new Random().Next(10),
                //                        Lat = 51 + new Random().Next(10),
                //                        Street = "City TestResto" + i,
                //                        HouseNumber = i.ToString(),
                //                        Main_city_name = "City TestResto" + i,
                //                    });
                //                }
                // }


                //3.Reviews toevoegen
                reviewRepo.CreateAsync(new Review
                {
                    Id = new MongoDB.Bson.ObjectId(),
                    FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                    UserId = Guid.NewGuid(),
                    Subject = "Pricing",
                    Comment = "Too expensive",
                    Rating = 4.5M


                }); ;
            reviewRepo.CreateAsync(new Review
            {
                Id = new MongoDB.Bson.ObjectId(),
               FlightId =Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                UserId = Guid.NewGuid(),
                Subject = "Pricing",
                Comment = "Cheap enough for me.",
                Rating = 7.2M

            });

            reviewRepo.CreateAsync(new Review
            {
                Id = new MongoDB.Bson.ObjectId(),
               FlightId =Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                UserId = Guid.NewGuid(),
                Subject = "Service",
                Comment = "Excellent",
                Rating = 8.0M
            });


            reviewRepo.CreateAsync(new Review
            {
                Id = new MongoDB.Bson.ObjectId(),
               FlightId =Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                UserId = Guid.NewGuid(),
                Subject = "Service",
                Comment = "Abysmal.",
                Rating = 5

            });

            reviewRepo.CreateAsync(new Review
            {
                Id = new MongoDB.Bson.ObjectId(),
               FlightId =Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                UserId = Guid.NewGuid(),
                Subject = "Food",
                Comment = "They gave my grandma rice, against her will.",
                Rating = 6

            });

            reviewRepo.CreateAsync(new Review
            {
                Id = new MongoDB.Bson.ObjectId(),
               FlightId =Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                UserId = Guid.NewGuid(),
                Subject = "Food",
                Comment = "Excellent cheesecrackers.",
                Rating = 8

            });

            //zoekindexen aanmaken op Mongo
            IndexKeysDefinition<Review> keys = "{FlightId: 1 }";
            var indexModel = new CreateIndexModel<Review>(keys);
            context.Reviews.Indexes.CreateOneAsync(indexModel);

            //IndexKeysDefinition<Flight>Flightkeys = "{FlightId: 1 }";
            //var indexModelComment = new CreateIndexModel<Flight>(Flightkeys);
            //context.Flights.Indexes.CreateOneAsync(indexModelComment);

        }
                            catch (Exception exc)
                            {
                                Console.WriteLine("fout bij het seeden:", exc);
                            }
}
                }
}