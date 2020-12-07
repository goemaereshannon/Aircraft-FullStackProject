using MongoDB.Driver;
using ReviewServices.Data;
using ReviewServices.Models;

using ReviewServices.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewServices.Repos
{
    public class ReviewRepo : IReviewRepo
    {
        //class ReviewRepo:IReviewRepo
        private readonly ReviewServicesContext context;
        public ReviewRepo(ReviewServicesContext context)
        {
            this.context = context;
        }
        //TODO: genericrepo voor MongoDB
        //*** GET -------------------------------------------------------------
        public async Task<IEnumerable<Review>> GetAll(ReviewFilter filter = null)
        {
            try
            {
                var result = new List<Review>();
                if (filter == null || filter.FlightId == null && filter.Subject == null && filter.DateOfCreation == null)
                {
                    //var result = await context.Reviews.Aggregate().Lookup<Review, Author, Review>(context.Authors, aut => aut.UserId, d => d.UserId, aut => aut.Author);
                    result = await context.Reviews.Find(FilterDefinition<Review>.Empty).ToListAsync<Review>();
                   
                }
                else
                {
                    result = await context.Reviews.Find(filter.ToFilterDefinition())
                    .SortBy(d => d.DateOfCreation).ThenBy(d => d.Subject)
                    .ToListAsync<Review>();
                }

                foreach (Review review in result)
                {
                    review.Flight = context.Flights.AsQueryable().Where(fl => fl.FlightId == review.FlightId).FirstOrDefault();
                    review.Author = context.Authors.AsQueryable().Where(aut => aut.UserId == review.UserId).FirstOrDefault();
                        

                  }

                return result;
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
            public async Task<IEnumerable<Review>> GetReviewsForFlight(string id)
        {
            var objId = new Guid(id);
            var reviews = await context.Reviews.Find(b => b.FlightId == objId).ToListAsync<Review>();
            return reviews;
        }
        /*** CreateAsync -----------------------------------------*/
        public async Task<Review> CreateAsync(Review review)
        {
            //Gebruik van context acties op de IMongoCollecties
            await context.Reviews.InsertOneAsync(review);
            return review;
        }
        public async Task<IEnumerable<Object>> GetReviewsGroupedBySubject()
        {
            IMongoCollection<Review> collection = context.Reviews;
            //Kan met de fluent Aggregate functie of LINQ
            var result = collection.AsQueryable() //Met LINQ bevraagbaar maken
            .Select(r => new { r.Subject })
            .GroupBy(r => r.Subject) //groepering (volgens de Key Locatie) .
                                     //anoniem object bepaalt wat je wenst weer te geven( hier: aantal per locatie)
            .Select(group => new { SubjectRange = group.Key, Count = group.Count() })
            .OrderBy(b => b.SubjectRange)
            .ToList();
            return result;
        }

        public async Task<IEnumerable<Object>> GetAllSubjects()
        {
            var result = context.Reviews.AsQueryable().Select(r => new { r.Subject }).Distinct();
            //IMongoCollection<SubjectCategorie> collection = context.SubjectCategories;
            //var result = collection.AsQueryable().ToList();
            return result;
        }
    }
}
