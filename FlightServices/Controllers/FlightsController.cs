using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlightServices.Data;
using FlightServices.Models;
using AutoMapper;
using FlightServices.DTOs;
using FlightServices.Repositories;

namespace FlightServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        //private readonly FlightServicesContext _context;
        private readonly IGenericRepo<Flight> genericFlightRepo;
        private readonly IGenericRepo<Departure> genericDepartureRepo;
        private readonly IGenericRepo<Destination> genericDestinationRepo;
        private readonly IGenericRepo<Airplane> genericAirplaneRepo; 
        private readonly IGenericRepo<Location> genericLocationRepo; 

        private readonly IMapper mapper;

        private readonly IDepartureRepo departureRepo;
        private readonly IDestinationRepo destinationRepo;

        public FlightsController(IGenericRepo<Flight> genericFlightRepo, IGenericRepo<Departure> genericDepartureRepo, IGenericRepo<Destination> genericDestinationRepo, IGenericRepo<Airplane> genericAirplaneRepo, IGenericRepo<Location> genericLocationRepo, IMapper mapper, IDepartureRepo departureRepo, IDestinationRepo destinationRepo)
        {
            this.genericFlightRepo = genericFlightRepo;
            this.genericDepartureRepo = genericDepartureRepo;
            this.genericDestinationRepo = genericDestinationRepo;
            this.genericAirplaneRepo = genericAirplaneRepo;
            this.genericLocationRepo = genericLocationRepo;

            this.departureRepo = departureRepo;
            this.destinationRepo = destinationRepo;

            this.mapper = mapper;
          
        }



        // GET: api/Flights
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlights()
        {
            IEnumerable<Flight> flights; 
            try
            {
                flights = await genericFlightRepo.GetAllAsync();
                //relaties
                foreach(Flight f in flights)
                {
                    f.Departure = await departureRepo.GetDepartureWithLocationByDepartureId(new Guid(f.DepartureId.ToString()));

                    f.Destination = await destinationRepo.GetDestinationWithLocationByDestinationId(new Guid(f.DestinationId.ToString()));

                    Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(f.AirplaneId);
                    f.Airplane = airplane; 
                }
            }
            catch (Exception ex)
            {
                return NotFound(new { message = "Flights not found" + ex}); 
            }

            var flightsDTO = mapper.Map<IEnumerable<Flight>>(flights);
            return Ok(flightsDTO); 
            
        }

        // GET: api/Flights/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Flight>> GetFlight(Guid id)
        //{
        //    var flight = await _context.Flights.FindAsync(id);

        //    if (flight == null)
        //    {
        //        return NotFound();
        //    }

        //    return flight;
        //}

        //// PUT: api/Flights/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutFlight(Guid id, Flight flight)
        //{
        //    if (id != flight.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(flight).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!FlightExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Flights
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Flight>> PostFlight(Flight flight)
        //{
        //    _context.Flights.Add(flight);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetFlight", new { id = flight.Id }, flight);
        //}

        //// DELETE: api/Flights/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Flight>> DeleteFlight(Guid id)
        //{
        //    var flight = await _context.Flights.FindAsync(id);
        //    if (flight == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Flights.Remove(flight);
        //    await _context.SaveChangesAsync();

        //    return flight;
        //}

        //private bool FlightExists(Guid id)
        //{
        //    return _context.Flights.Any(e => e.Id == id);
        //}
    }
}
