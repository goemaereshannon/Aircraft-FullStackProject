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
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.Extensions.Caching.Memory;
using FlightServices.Helpers;

namespace FlightServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly IMemoryCache memoryCache;

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
        private readonly IAirplaneRepo airplaneRepo;

        public FlightsController(IMemoryCache memoryCache,IGenericRepo<Flight> genericFlightRepo, IGenericRepo<Departure> genericDepartureRepo, IGenericRepo<Destination> genericDestinationRepo, IGenericRepo<Airplane> genericAirplaneRepo, IGenericRepo<Location> genericLocationRepo, IMapper mapper, IDepartureRepo departureRepo, IDestinationRepo destinationRepo, IFlightRepo flightRepo, IAirplaneRepo airplaneRepo)
        {
            this.memoryCache = memoryCache;

            this.genericFlightRepo = genericFlightRepo;
            this.genericDepartureRepo = genericDepartureRepo;
            this.genericDestinationRepo = genericDestinationRepo;
            this.genericAirplaneRepo = genericAirplaneRepo;
            this.genericLocationRepo = genericLocationRepo;

            this.departureRepo = departureRepo;
            this.destinationRepo = destinationRepo;
            this.flightRepo = flightRepo;
            this.airplaneRepo = airplaneRepo;

            this.mapper = mapper;
          
        }



        // GET: api/Flights
        [HttpGet("/api/flights")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<FlightDTO>>> GetFlights()
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

        // GET: api/Flights/{id}
        [HttpGet("/api/flights/{id}")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<FlightDTO>> GetFlightDetails(string id)
        {
            Flight flight;
            try
            {
                
                flight = await genericFlightRepo.GetAsyncByGuid(new Guid(id));
                //relaties
            
                flight.Departure = await departureRepo.GetDepartureWithLocationByDepartureId(new Guid(flight.DepartureId.ToString()));

                flight.Destination = await destinationRepo.GetDestinationWithLocationByDestinationId(new Guid(flight.DestinationId.ToString()));

                Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(flight.AirplaneId);
                flight.Airplane = airplane;
                
            }
            catch (Exception ex)
            {
                return NotFound(new { message = "Flights not found" + ex });
            }

            var flightDTO = mapper.Map<Flight>(flight);
            return Ok(flightDTO);

        }


        // GET: api/flightsearch
        [HttpGet("/api/flightsearch")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<FlightDTO>>> GetFlightsByDateBasedOnDepartureAndDestination([FromBody] FlightSearchDTO flightSearchDTO)
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

        // GET: api/Flightstoday
        [HttpGet("/api/flightstoday")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<FlightDTO>>> GetFlightsToday()
        {
            IEnumerable<Flight> flightsCached;

            try
            {
                if (!memoryCache.TryGetValue(CacheKeys.TodaysFlightsCacheKey, out flightsCached))
                {
                    flightsCached = await genericFlightRepo.GetByExpressionAsync(f => f.TimeOfDeparture.Date == DateTime.Now.Date);
                    DateTime expiration = DateTime.Today.AddDays(1);
                    var cacheEntryOtions = new MemoryCacheEntryOptions().SetAbsoluteExpiration(expiration);
                    memoryCache.Set(CacheKeys.TodaysFlightsCacheKey, flightsCached, cacheEntryOtions); 
                }
                else
                {
                    //cache bestaat 
                    flightsCached = (ICollection<Flight>)memoryCache.Get(CacheKeys.TodaysFlightsCacheKey); 
                }
            }
              
            catch (Exception ex)
            {
                return NotFound(new { message = "Flights not found" + ex });
            }

            var flightsDTO = mapper.Map<IEnumerable<Flight>>(flightsCached);
            return Ok(flightsDTO);

        }

        // GET: api/flights/destinations/{search}
        [HttpGet("/api/flights/destinations/{search}")]
        [ProducesResponseType(typeof(IEnumerable<DepartureDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<DestinationDTO>>> GetAllDestinations(string search)
        {
            IEnumerable<Destination> result;
            try
            {
                if (!string.IsNullOrEmpty(search)) {
                    IEnumerable<Destination> searchResult = await genericDestinationRepo.GetByExpressionAsync(
                           //  &&
                           d => d.Location.City.Contains(search) ||
                           d.Location.Country.Contains(search) ||
                           d.Location.Airport.Contains(search)
                           );
                    //relaties
                    foreach (Destination d in searchResult)
                    {
                        d.Location = await genericLocationRepo.GetAsyncByGuid(d.LocationId);
                    }
                    return Ok(searchResult); 
                }
                else {
                    result = await genericDestinationRepo.GetAllAsync();
                }
            }
            catch (Exception ex)
            {
                return NotFound(new { message = "Destination locations not found" + ex });
            }

            var destinationDTO = mapper.Map<IEnumerable<Destination>>(result);
            return Ok(destinationDTO);

        }
        // GET: api/flights/departures/{search}
        [HttpGet("/api/flights/departures/{search}")]
        [ProducesResponseType(typeof(IEnumerable<DestinationDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<DestinationDTO>>> GetAllDepartures(string search)
        {
            IEnumerable<Departure> result;
            try
            {
                if (!string.IsNullOrEmpty(search))
                {
                    IEnumerable<Departure> searchResult = await genericDepartureRepo.GetByExpressionAsync(
                           d => d.Location.City.Contains(search) ||
                           d.Location.Country.Contains(search) ||
                           d.Location.Airport.Contains(search)
                           );
                    //relaties
                    foreach (Departure d in searchResult)
                    {
                        d.Location = await genericLocationRepo.GetAsyncByGuid(d.LocationId);
                    }
                    return Ok(searchResult);
                }
                else
                {
                    result = await genericDepartureRepo.GetAllAsync();
                }
            }
            catch (Exception ex)
            {
                return NotFound(new { message = "Departure locations not found" + ex });
            }

            var departureDTO = mapper.Map<IEnumerable<Departure>>(result);
            return Ok(departureDTO);

        }
        /// <summary>
        /// Gedeeltelijk updaten van vlucht: vluchtstatus 
        /// </summary>
        /// <param name="flightId"></param>
        /// <param name="patchDoc">[{"value": "new value", "path":"FlightStatus", "op":"replace"}]</param>
        /// <returns></returns>
        [HttpPatch("/api/flights/{flightId}")]
        public async Task<IActionResult> PartiallyUpdateRecipe(string flightId, [FromBody] JsonPatchDocument<FlightDTO> patchDoc)
        {
            try
            {
                //1. validaties en app via mapping ophalen
                if ((patchDoc == null) || (flightId == null) || (flightId == ""))
                {
                    return BadRequest();
                }
                Guid guid = Guid.Parse(flightId);
                IEnumerable<Flight> flights = (await genericFlightRepo.GetByExpressionAsync(f =>
                f.Id.Equals(guid)));
                if (flights == null || flights.Count() == 0)
                {
                    return NotFound();
                }
                if (!ModelState.IsValid) return BadRequest(ModelState);
                //2. FlightDTO ophalen
                Flight flight = flights.First();
                Guid depId = flight.DepartureId;
                Guid destId = flight.DestinationId;
                Guid airplId = flight.AirplaneId; 
                flight.Departure = await genericDepartureRepo.GetAsyncByGuid(flight.DepartureId);
                flight.Destination = await genericDestinationRepo.GetAsyncByGuid(flight.DestinationId);
                flight.Airplane = await genericAirplaneRepo.GetAsyncByGuid(flight.AirplaneId);
                var flightDTOtoPatch = mapper.Map<Flight, FlightDTO>(flight); //map naar DTO
                var tempId = guid; //alleen indien verdwenen door mapping
                try
                {
                    //2. Patch uitvoeren op het JsonDoc
                    patchDoc.ApplyTo(flightDTOtoPatch); //PATCH TOEPASSEN OP DTO
                    flight = mapper.Map<Flight>(flightDTOtoPatch);
                    flight.DepartureId = depId;
                    flight.DestinationId = destId; 
                    flight.AirplaneId = airplId; 
                    await genericFlightRepo.Update(flight, tempId); //generic repo
                }
                catch (Exception exc)
                {
                    throw new Exception($"Patchupdate of {guid} failed. {exc.InnerException.Message}");
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
           
            return NoContent();
        }

        [HttpPost("/api/flights/airplane")]
        public async Task<ActionResult<AirplaneDTO>> PostAirplane([FromBody] AirplaneDTO airplaneDTO)
        {
            if (ModelState.IsValid)
            {
                    Airplane airplane = mapper.Map<Airplane>(airplaneDTO);
                    await genericAirplaneRepo.Create(airplane);
                    return Ok(airplaneDTO);
            }
            else
            {
                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating airplane {airplaneDTO.Name} failed"
                });
            }

        }

        [HttpPost("/api/flights/departure")]
        public async Task<ActionResult<DepartureDTO>> PostDeparture([FromBody] DepartureDTO departureDTO)
        {
            if (ModelState.IsValid)
            {
                    Location location = mapper.Map<Location>(departureDTO.LocationDTO);
                    await genericLocationRepo.Create(location);
                    Departure departure = mapper.Map<Departure>(departureDTO);
                    await genericDepartureRepo.Create(departure);
                    return Ok(departureDTO);
                
            }
            else
            {
                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating departure {departureDTO.LocationDTO.City} failed"
                });
            }

        }

        [HttpPost("/api/flights/destination")]
        public async Task<ActionResult<DestinationDTO>> PostDestination([FromBody] DestinationDTO destinationDTO)
        {
            if (ModelState.IsValid)
            {
                Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
                await genericLocationRepo.Create(location);
                Destination destination = mapper.Map<Destination>(destinationDTO);
                await genericDestinationRepo.Create(destination);
                return Ok(destinationDTO);

            }
            else
            {
                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating destination {destinationDTO.LocationDTO.City} failed"
                });
            }

        }

        // POST: api/Flights
        /// <summary>
        /// Voeg een nieuwe flight toe. Een vertrek- of aankomstplaats of vliegtuig die niet bestaat wordt aangemaakt De response bevat info over de toegevoegde vlucht. 
        /// </summary>
        /// <param name="flightDTO"> </param>
        /// <returns > Nieuwe vlucht </returns>
        [HttpPost("/api/flights")]
        public async Task<ActionResult<FlightDTO>> PostFlight([FromBody] FlightDTO flightDTO)
        {
            try
            {
                if (string.IsNullOrEmpty(flightDTO.FlightStatus)) { flightDTO.FlightStatus = "On Time"; }

                //DTO in body is leeg 
                if (flightDTO == null)
                {
                    return BadRequest(new { Message = "No flight input " });
                }
                var flight = mapper.Map<Flight>(flightDTO);

                //na mapping flight = null 
                if (flight == null)
                {
                    return BadRequest(new { Message = "Not enough data to create flight" });
                }
                //bestaat vliegtuig al? 
                var airplaneByName = await airplaneRepo.GetAirplaneByName(flight.Airplane.Name); 
                if (airplaneByName == null) 
                {
                    await PostAirplane(flightDTO.AirplaneDTO);
                    var airplaneName = await airplaneRepo.GetAirplaneByName(flightDTO.AirplaneDTO.Name);
                    flight.AirplaneId = airplaneName.Id;
                    flight.Airplane.Id = airplaneName.Id; 
                }
                else
                {
                    flight.AirplaneId = airplaneByName.Id;
                    flight.Airplane.Id = airplaneByName.Id; 
                }
                
                var departureByName = await departureRepo.GetDepartureByLocationAirport(flight.Departure.Location.Airport);
                if (departureByName == null)
                {
                    await PostDeparture(flightDTO.DepartureDTO);
                    var departureName = await departureRepo.GetDepartureByLocationAirport(flightDTO.DepartureDTO.LocationDTO.Airport);
                    flight.DepartureId = departureName.Id;
                    flight.Departure.Id = departureName.Id; 
                }
                else
                {
                    flight.DepartureId = departureByName.Id;
                    flight.Departure.Id = departureByName.Id; 
                }
                var destinationByName = await destinationRepo.GetDestinationByLocationAirport(flight.Destination.Location.Airport); 
                if(destinationByName == null)
                {
                    await PostDestination(flightDTO.DestinationDTO);
                    var destinationName = await destinationRepo.GetDestinationByLocationAirport(flightDTO.DestinationDTO.LocationDTO.Airport);
                    flight.DestinationId = destinationName.Id;
                    flight.Destination.Id = destinationName.Id; 
                }
                else
                {
                    flight.DestinationId = destinationByName.Id;
                    flight.Destination.Id = destinationByName.Id; 
                }

                //model state unvalid 
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {

                    await genericFlightRepo.Create(flight);
                    return CreatedAtAction("GetFlightById", new { id = flight.Id }, mapper.Map<FlightDTO>(flight));
                }
                catch (Exception)
                {
                    return RedirectToAction("HandleErrorCode", "Error", new
                    {
                        statusCode = 400,
                        errorMessage = $"Creating flight {flightDTO.Id} failed"
                    });
                }

            }
            catch (Exception ex)
            {

                throw ex;
            }
            
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
