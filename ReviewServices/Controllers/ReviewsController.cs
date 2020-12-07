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
        [HttpGet("/api/reviews")]
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
      
        [HttpGet("/api/reviews/groupedbysubject")]
        public async Task<ActionResult> ReviewsBySubject()
        {
            var detailsGrouped = repo.GetReviewsGroupedBySubject();
            return Ok(detailsGrouped);


        }
        [HttpGet("/api/reviews/subjects")]
        public async Task<ActionResult> GetAllSubjects()
        {
            //var reviews= repo.GetAll(null);
            var subjects = repo.GetAllSubjects();
           // List<string> subjects = new List<string>();
     
            return Ok(subjects);


        }
        //TODO: write postreview
        [HttpPost("/api/reviews")]
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
