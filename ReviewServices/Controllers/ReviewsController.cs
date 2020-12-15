using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReviewServices.Models;
using ReviewServices.Repos;
using ReviewServices.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReviewServices.Controllers
{
    //TODO: add authorization to get functions of reviews so only admins can see them
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewRepo repo;

        public ReviewsController(IReviewRepo repo)
        {
            this.repo = repo;
        }

        //TODO: filter by departureairport, destinationairport, timeofarrival, timeofdeparture
        //api/review?reviewfilter.subject=pricing&reviewFilter.id= ...
        /// <summary>
        /// Either get all the reviews, or get a filtered list depending on the filters you filled in: subject, flightId, DateOfCreation
        /// </summary>
        /// <param name="reviewFilter"></param>
        /// <returns></returns>
        [HttpGet("/api/reviews")]
        [ProducesResponseType(typeof(IEnumerable<Review>), StatusCodes.Status200OK)]
       
        public async Task<IActionResult> Index([FromQuery] ReviewFilter reviewFilter)
        {
            var filter = new ReviewFilter();
            {
                filter.Subject = reviewFilter.Subject ;
                filter.FlightId = reviewFilter.FlightId;
                filter.DateOfCreation = reviewFilter.DateOfCreation;
            }
            return Ok(await repo.GetAll(filter));
        }
      /// <summary>
      /// groups reviews by their subject
      /// </summary>
      /// <returns></returns>
        [HttpGet("/api/reviews/groupedbysubject")]
        public async Task<ActionResult> ReviewsBySubject()
        {
            var detailsGrouped = repo.GetReviewsGroupedBySubject();
            return Ok(detailsGrouped);


        }
        /// <summary>
        /// returns the unique subjects of reviews
        /// </summary>
        /// <returns></returns>
        [HttpGet("/api/reviews/subjects")]
        public async Task<ActionResult> GetAllSubjects()
        {
            //var reviews= repo.GetAll(null);
            var subjects = repo.GetAllSubjects();
           // List<string> subjects = new List<string>();
     
            return Ok(subjects);


        }
        /// <summary>
        /// Post a new review linked to a flight and an author
        /// </summary>
        /// <param name="review"></param>
        /// <returns></returns>
      
        [HttpPost("/api/reviews")]
        [ProducesResponseType(typeof(IEnumerable<Review>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(IEnumerable<Review>), StatusCodes.Status400BadRequest)]
      
        public async Task<ActionResult<Review>> PostReview([FromBody] Review review)
        {

            //  Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
            // Location createdLocation = await genericLocationRepo.Create(location);
            if (review == null) return BadRequest(new { Message = "No price input" });

            try
            {
                var result = await repo.CreateAsync(review);
                if (result == null) return BadRequest(new { Message = $"Review about {review.Subject} could not be saved" });
                return Created("api/reviews", review);

            }
            catch (Exception ex)
            {

                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating review about {review.Subject} failed : {ex}"
                });
            }

        }
    }
    
}
