
using ReviewServices.Models;
using ReviewServices.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReviewServices.Repos
{
    public interface IReviewRepo
    {
        Task<Review> CreateAsync(Review review);
        Task<IEnumerable<Review>> GetAll(ReviewFilter filter);
        Task<IEnumerable<Review>> GetReviewsForFlight(string id);
        Task<IEnumerable<Object>>GetReviewsGroupedBySubject();
    }
}