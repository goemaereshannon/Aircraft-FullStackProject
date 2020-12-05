using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        //api/review?reviewfilter.subject=pricing&reviewFilter.id= ...
        [HttpGet("/api/reviews")]
        public async Task<IActionResult> Index([FromQuery] ReviewFilter reviewFilter)
        {
            var filter = new ReviewFilter();
            {
                filter.Subject = reviewFilter.Subject;
                filter.FlightId = reviewFilter.FlightId;
                filter.DateOfCreation = reviewFilter.DateOfCreation;
            }
            return Ok(await repo.GetAll(filter));
        }
        [Route("ReviewsGroupedBySubject")]
        [HttpGet]
        public async Task<ActionResult> ReviewsBySubject()
        {
            var detailsGrouped = repo.GetReviewsGroupedBySubject();
            return Ok(detailsGrouped);


        }
    }
    //TODO: write postreview
    
}
