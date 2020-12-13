
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
        public List<Flight> Flights = new List<Flight>
        {
             new Flight
            {
                FlightId= new Guid("d470123f-7795-4158-aa2b-9088e29de88d"),
                //TimeOfDeparture = DateTime.Parse("15-12-2020T16:00:00Z"),
                TimeOfDeparture = DateTime.Parse("2020-12-15T16:00:00Z"),
                TimeOfArrival = DateTime.Parse("2020-12-15T18:00:00Z"),
                     DepartureAirport= "JFK",
               DestinationAirport ="BRU",

            },
            new Flight
            {
                FlightId = new Guid("33478a6b-437f-4416-932d-638b1c0415ea"),
                 TimeOfDeparture = DateTime.Parse("2020-12-15T15:00:00Z"),
                TimeOfArrival = DateTime.Parse("2020-12-15T15:30:00Z"),
               DepartureAirport= "BRU",
               DestinationAirport ="CDG",
                
               

            }
          
        };
        public Author Author = new Author()
        {
           
            UserId = new Guid("3fa85f64-5717-4562-b3fc-2c963f66afa6"),
            FirstName = "Alex",
            LastName = "Christiaens"
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
            context.Database.DropCollection("reviews");
            context.Database.DropCollection("flights");
            context.Database.DropCollection("authors");
          //  context.Database.DropCollection("subjectCategories");
            if (await context.Reviews.EstimatedDocumentCountAsync() == 0)
            {
                try
                {
                    //await context.SubjectCategories.InsertManyAsync(subjects);
                    await context.Flights.InsertManyAsync(Flights);
                   await context.Authors.InsertOneAsync(Author);
                    //3.Reviews toevoegen
                   await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                        //FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        FlightId = Lst_FlightGuids[0],
                        Flight =Flights[0],
                       // UserId = Guid.NewGuid(),
                        UserId = Author.UserId,
                       //Subject = 
                       //new SubjectCategorie
                       //{
                       //    Subject = "Pricing"
                       //},
                       Subject = "Pricing",
                        Comment = "Too expensive",
                        Rating = 2.5M,
                        Author = Author


                    }); ;
                   await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                       // FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                       FlightId = Lst_FlightGuids[1],
                       Flight = Flights[1],
                       UserId = Author.UserId,
                       //Subject = new SubjectCategorie
                       //{
                       //    Subject = "Pricing"
                       //},

                       Subject = "Pricing",
                        Comment = "Cheap enough for me.",
                        Rating = 3.2M,
                       Author = Author

                   });

                   await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                       // FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                       FlightId = Lst_FlightGuids[0],
                       Flight = Flights[0],
                       UserId = Author.UserId,
                       // Subject = new SubjectCategorie { Subject = "Service" },
                       Subject = "Service",
                        Comment = "Excellent",
                        Rating = 4.5M,
                       Author = Author
                   });


                    await reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                       // FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                        FlightId = Lst_FlightGuids[1],
                        Flight = Flights[1],
                        UserId = Author.UserId,
                        //Subject = new SubjectCategorie
                        //{
                        //    Subject = "Service"
                        //},
                        Subject = "Service",
                          Comment = "Abysmal.",
                        Rating = 1,
                        Author = Author

                    }) ;

                  await  reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                      //  FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                      FlightId = Lst_FlightGuids[0],
                      Flight = Flights[0],
                      UserId = Author.UserId,
                      //Subject = new SubjectCategorie { Subject= "Food" },
                      Subject = "Food",
                        Comment = "They gave my grandma rice, against her will.",
                        Rating = 2,
                      Author = Author

                  });

                  await  reviewRepo.CreateAsync(new Review
                    {
                        Id = new MongoDB.Bson.ObjectId(),
                      //  FlightId = Lst_FlightGuids[new Random().Next(Lst_FlightGuids.Count)],
                      FlightId = Lst_FlightGuids[1],
                      Flight = Flights[1],
                      UserId = Author.UserId,
                      //Subject = new SubjectCategorie
                      //{
                      //    Subject = "Food"
                      //},
                      Subject = "Food",
                        Comment = "Excellent cheesecrackers.",
                        Rating = 4,
                      Author = Author

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