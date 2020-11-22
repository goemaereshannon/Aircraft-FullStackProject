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
        private readonly IFlightRepo flightRepo; 

        public FlightsController(IGenericRepo<Flight> genericFlightRepo, IGenericRepo<Departure> genericDepartureRepo, IGenericRepo<Destination> genericDestinationRepo, IGenericRepo<Airplane> genericAirplaneRepo, IGenericRepo<Location> genericLocationRepo, IMapper mapper, IDepartureRepo departureRepo, IDestinationRepo destinationRepo, IFlightRepo flightRepo)
        {
            this.genericFlightRepo = genericFlightRepo;
            this.genericDepartureRepo = genericDepartureRepo;
            this.genericDestinationRepo = genericDestinationRepo;
            this.genericAirplaneRepo = genericAirplaneRepo;
            this.genericLocationRepo = genericLocationRepo;

            this.departureRepo = departureRepo;
            this.destinationRepo = destinationRepo;
            this.flightRepo = flightRepo; 

            this.mapper = mapper;
          
        }



        // GET: api/Flights
        [HttpGet]
        [Route("/api/flights")]
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
      

        // GET: api/flightsearch
        [HttpGet]
        [Route("/api/flightsearch")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlightsByDateBasedOnDepartureAndDestination([FromBody] FlightSearchDTO flightSearchDTO)
        {
            var flights = await GetFlights();
            try
            {
                if (ModelState.IsValid)
                {
                    //Er werd iets in Departure ingevuld
                    if (!string.IsNullOrEmpty(flightSearchDTO.Departure) )
                    {
                        try
                        {
                            IEnumerable<Flight> depResult = await genericFlightRepo.GetByExpressionAsync(
                             //  &&
                            f => f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                            f.Departure.Location.Country.Contains(flightSearchDTO.Departure));
                            //departure en departure time zijn ingevuld 
                            if (flightSearchDTO.DepartureTime != null)
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f => f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime);
                                List<Flight> depAndTResult = new List<Flight>(); 
                                foreach(var item in result)
                                {
                                    foreach(var flight in depResult)
                                    {
                                        if(item.Id == flight.Id)
                                        {
                                            depAndTResult.Add(item);
                                        }
                                    }
                                }
                                IEnumerable<Flight> resultList = await flightRepo.GetFlightsByDateBasedOnDestination(flightSearchDTO, depAndTResult);
                                List<Flight> depTandDestResult = new List<Flight>();
                                foreach (var item in resultList)
                                {
                                    foreach (var flight in depAndTResult)
                                    {
                                        if (item.Id == flight.Id)
                                        {
                                            depTandDestResult.Add(item);
                                        }
                                    }
                                }
                                return Ok(depTandDestResult); 
                            }

                            else
                            {
                                 
                                IEnumerable<Flight> resultList = await flightRepo.GetFlightsByDateBasedOnDestination(flightSearchDTO, depResult);
                                List<Flight> result = new List<Flight>();
                                foreach (var item in resultList)
                                {
                                    foreach (var flight in depResult)
                                    {
                                        if (item.Id == flight.Id)
                                        {
                                            result.Add(item);
                                        }
                                    }
                                }
                                return Ok(result); 

                            }

                        }
                        catch (Exception ex)
                        {

                            return NotFound(new { message = "Flights not found with dep" + ex });
                        }
                    }
                    else
                    {
                        return Ok(flights);
                    }
                }
            }
            catch (Exception ex)
            {

                return NotFound(new { message = "Invalid model" + ex });
            }
            return null;
        }

        // GET: api/Flights
        [HttpGet]
        [Route("/api/flightstoday")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlightsToday()
        {
            IEnumerable<Flight> result; 
            try
            {
                result = await genericFlightRepo.GetByExpressionAsync(f => f.TimeOfDeparture.Date == DateTime.Now.Date);
            }
            catch (Exception ex)
            {
                return NotFound(new { message = "Flights not found" + ex });
            }

            var flightsDTO = mapper.Map<IEnumerable<Flight>>(result);
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
