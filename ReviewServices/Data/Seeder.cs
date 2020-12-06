
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using MongoDB.Driver;


using ReviewServices.Models;
using ReviewServices.Repos;

namespace ReviewServices.Data
{
    public class Seeder
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
        //public List<SubjectCategorie> subjects = new List<SubjectCategorie> { 
        //    new SubjectCategorie { Subject = "Pricing" },
        //    new SubjectCategorie { Subject = "Food" }, 
        //    new SubjectCategorie { Subject = "Services" } 
        //};
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

        public async Task initDatabase(int nmbrFlights = 2)
        {
            //geen data blijven toevoegen (MongoDB.Driver)
           // context.Database.DropCollection("reviews");
          //  context.Database.DropCollection("subjectCategories");
            if (await context.Reviews.EstimatedDocumentCountAsync() == 0)
            {
                try
                {
                    //await context.SubjectCategories.InsertManyAsync(subjects);
                    //3.Reviews toevoegen
                   await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        UserId = Guid.NewGuid(),
                       //Subject = 
                       //new SubjectCategorie
                       //{
                       //    Subject = "Pricing"
                       //},
                       Subject = "Pricing",
                        Comment = "Too expensive",
                        Rating = 4.5M


                    }); ;
                   await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        UserId = Guid.NewGuid(),
                       //Subject = new SubjectCategorie
                       //{
                       //    Subject = "Pricing"
                       //},

                       Subject = "Pricing",
                        Comment = "Cheap enough for me.",
                        Rating = 7.2M

                    });

                   await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        UserId = Guid.NewGuid(),
                       // Subject = new SubjectCategorie { Subject = "Service" },
                       Subject = "Service",
                        Comment = "Excellent",
                        Rating = 8.0M
                    });


                    await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        UserId = Guid.NewGuid(),
                        //Subject = new SubjectCategorie
                        //{
                        //    Subject = "Service"
                        //},
                        Subject = "Service",
                          Comment = "Abysmal.",
                        Rating = 5

                    }) ;

                  await  reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        UserId = Guid.NewGuid(),
                      //Subject = new SubjectCategorie { Subject= "Food" },
                      Subject = "Food",
                        Comment = "They gave my grandma rice, against her will.",
                        Rating = 6

                    });

                  await  reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        UserId = Guid.NewGuid(),
                      //Subject = new SubjectCategorie
                      //{
                      //    Subject = "Food"
                      //},
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
}