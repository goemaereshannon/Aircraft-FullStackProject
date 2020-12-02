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
using System.Diagnostics;

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
        private readonly IAirplaneRepo airplaneRepo;
        private readonly IGenericRepo<Seat> seatRepo;

        public FlightsController(IMemoryCache memoryCache,IGenericRepo<Flight> genericFlightRepo, IGenericRepo<Departure> genericDepartureRepo, IGenericRepo<Destination> genericDestinationRepo, IGenericRepo<Airplane> genericAirplaneRepo, IGenericRepo<Location> genericLocationRepo, IMapper mapper, IDepartureRepo departureRepo, IDestinationRepo destinationRepo, IAirplaneRepo airplaneRepo, IGenericRepo<Seat> seatRepo)
        {
            this.memoryCache = memoryCache;

            this.genericFlightRepo = genericFlightRepo;
            this.genericDepartureRepo = genericDepartureRepo;
            this.genericDestinationRepo = genericDestinationRepo;
            this.genericAirplaneRepo = genericAirplaneRepo;
            this.genericLocationRepo = genericLocationRepo;

            this.departureRepo = departureRepo;
            this.destinationRepo = destinationRepo;
            this.airplaneRepo = airplaneRepo;
            this.seatRepo = seatRepo;
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

                    Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(f.AirplaneId.Value);
                    f.Airplane = airplane; 
                }
            }
            catch (Exception ex)
            {
                return NotFound(new { message = "Flights not found" + ex}); 
            }

            var flightsDTO = mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(flights);
            return Ok(flightsDTO); 
            
        }

        private async Task<IEnumerable<Flight>> GetFlightsInfo(IEnumerable<Flight> flights)
        {
            //relaties
            foreach (Flight f in flights)
            {
                f.Departure = await departureRepo.GetDepartureWithLocationByDepartureId(new Guid(f.DepartureId.ToString()));

                f.Destination = await destinationRepo.GetDestinationWithLocationByDestinationId(new Guid(f.DestinationId.ToString()));

                Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(f.AirplaneId.Value);
                f.Airplane = airplane;
            }
            return flights; 
        }

        // GET: api/Flights/{id}
        [HttpGet("/api/flights/{id}")]
        [ProducesResponseType(typeof(FlightDTO), StatusCodes.Status200OK)]
        public async Task<ActionResult<FlightDTO>> GetFlightDetails(Guid id)
        {
            try
            {
                if(id == Guid.Empty)
                {
                    return BadRequest(new { message = "Id is empty" }); 
                }
                
                var flight = await genericFlightRepo.GetAsyncByGuid(id);
                if(flight == null ||flight.DestinationId == null)
                {
                    return NotFound(new { message = "Flight not found" }); 
                }
                //relaties
            
                flight.Departure = await departureRepo.GetDepartureWithLocationByDepartureId(new Guid(flight.DepartureId.ToString()));

                flight.Destination = await destinationRepo.GetDestinationWithLocationByDestinationId(new Guid(flight.DestinationId.ToString()));

                Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(flight.AirplaneId.Value);
                
                
                flight.Airplane = airplane;


                var flightDTO = mapper.Map<Flight, FlightDTO>(flight);
                return Ok(flightDTO);


            }
            catch (Exception ex)
            {
                return NotFound(new { message = $"Flight not found {ex}"});
            }

        }


        // GET: api/flightsearch
        [HttpGet("/api/flightsearch")]
        [ProducesResponseType(typeof(IEnumerable<FlightDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<FlightDTO>>> GetFlightsByDateBasedOnDepartureAndDestination([FromQuery] string departureSearch, string destinationSearch, string departureTimeSearch, string arrivalTimeSearch) 
        {
            

            //FlightSearchDTO opvullen waar ingevuld
            FlightSearchDTO flightSearchDTO = new FlightSearchDTO();
            if (!string.IsNullOrEmpty(departureSearch))
            {
                flightSearchDTO.Departure = departureSearch; 
            }
            if(!string.IsNullOrEmpty(destinationSearch))
            {
                flightSearchDTO.Destination = destinationSearch; 
            }

            if (!string.IsNullOrEmpty(departureTimeSearch))
            {
                try
                {
                    flightSearchDTO.DepartureTime = DateTime.Parse(departureTimeSearch);
                }
                catch (Exception ex)
                {
                    flightSearchDTO.DepartureTime = null; 
                    Debug.WriteLine(ex);
                }
                
            }
            if (!string.IsNullOrEmpty(arrivalTimeSearch))
            {
                try
                {

                    flightSearchDTO.DepartureTime = DateTime.Parse(arrivalTimeSearch);
                }
                catch (Exception ex)
                {
                    flightSearchDTO.DestinationTime = null; 
                    Debug.WriteLine(ex);
                }
            }; 
            

            try
            {
                if (!string.IsNullOrEmpty(flightSearchDTO.Departure)) //DEP
                {
                    if (!string.IsNullOrEmpty(flightSearchDTO.Destination)) // DEP + DEST
                    {
                        if(flightSearchDTO.DepartureTime != null) // DEP + DEST + DEP T
                        {
                            if(flightSearchDTO.DestinationTime != null) //alle 4 search values ingevuld
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f => 
                                f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime &&
                                f.TimeOfArrival.Date == flightSearchDTO.DestinationTime &&
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result))); 
                            }
                            else // DEP DEST DEP T
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime &&
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }

                        }
                        else // DEP + DEST 
                        {
                            if (flightSearchDTO.DestinationTime != null) // DEP + DEST + DEST T 
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfArrival.Date == flightSearchDTO.DestinationTime &&
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                            else // DEP + DEST
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                        }
                    }
                    else // DEP
                    {
                        if (flightSearchDTO.DepartureTime != null) // DEP + DEP T 
                        {
                            if (flightSearchDTO.DestinationTime != null) //DEP + DEP T + DES T 
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime &&
                                f.TimeOfArrival.Date == flightSearchDTO.DestinationTime &&
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                            else // DEP DEP T
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime &&
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) 
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }

                        }
                        else // DEP
                        {
                            if (flightSearchDTO.DestinationTime != null) // DEP + DEST T 
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfArrival.Date == flightSearchDTO.DestinationTime &&
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) 
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                            else  // DEP
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.Departure.Location.City.Contains(flightSearchDTO.Departure) ||
                                f.Departure.Location.Country.Contains(flightSearchDTO.Departure) 
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                        }
                    }
                }
                else if(!string.IsNullOrEmpty(flightSearchDTO.Destination))// DEST
                {
                        if (flightSearchDTO.DepartureTime != null) // DEST + DEP T 
                        {
                            if (flightSearchDTO.DestinationTime != null) //DEST + DEP T + DEST T 
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime &&
                                f.TimeOfArrival.Date == flightSearchDTO.DestinationTime &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                            else // DEST + DEP T
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }

                        }
                        else // DEST 
                        {
                            if (flightSearchDTO.DestinationTime != null) //DEST +  DEST T 
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.TimeOfArrival.Date == flightSearchDTO.DestinationTime &&
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                            else // DEST
                            {
                                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                                f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                                f.Destination.Location.Country.Contains(flightSearchDTO.Destination)
                                );
                                return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                            }
                        }
                    
                   
                }
                else if (flightSearchDTO.DepartureTime != null) // enkel dep t 
                {
                    IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                               f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime 
                               );
                    return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                }
                else if(flightSearchDTO.DestinationTime != null) // enkel destT 
                {
                    IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f =>
                               f.TimeOfArrival.Date == flightSearchDTO.DestinationTime
                               );
                    return Ok(mapper.Map<IEnumerable<Flight>, IEnumerable<FlightDTO>>(await GetFlightsInfo(result)));
                }
                return await GetFlights(); 
            }
            catch (Exception ex)
            {

                return NotFound(new { message = "Invalid model" + ex });
            }
        }

        // GET: api/Flightstoday
        /// <summary>
        /// Geeft alle vluchten terug van vandaag, cachet deze tot het einde van de dag
        /// </summary>
        /// <returns>Alle vluchten vandaag</returns>
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
            flightsCached = await GetFlightsInfo(flightsCached); 
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
        [HttpPatch("/api/flights/{flightid}")]
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
                Guid depId = flight.DepartureId.Value;
                Guid destId = flight.DestinationId.Value;
                Guid airplId = flight.AirplaneId.Value; 
                flight.Departure = await genericDepartureRepo.GetAsyncByGuid(flight.DepartureId.Value);
                flight.Destination = await genericDestinationRepo.GetAsyncByGuid(flight.DestinationId.Value);
                flight.Airplane = await genericAirplaneRepo.GetAsyncByGuid(flight.AirplaneId.Value);
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
                    return RedirectToAction("HandleErrorCode", "Error", new
                    {
                        statusCode = 400,
                        errorMessage = ($"Patchupdate of {guid} failed. {exc.InnerException.Message}")
                    });
                }
            }
            catch (Exception ex)
            {

                return BadRequest(); 
            }
           
            return NoContent();
        }

        [HttpPost("/api/flights/airplane")]
        public async Task<ActionResult<AirplaneDTO>> PostAirplane([FromBody] AirplaneDTO airplaneDTO)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Airplane airplane = mapper.Map<AirplaneDTO, Airplane>(airplaneDTO);
                    await genericAirplaneRepo.Create(airplane);
                    
                }
                return Ok(airplaneDTO);
            }
            catch
            {
                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating airplane {airplaneDTO.Name} failed"
                });
            }

        }

        /// <summary>
        /// Wijzigen van vliegtuig 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="airplaneDTO"></param>
        /// <returns> airplaneDTO </returns>
        [HttpPut("/api/flights/airplane/{id}")]
        public async Task<ActionResult<AirplaneDTO>> PutAirplane(Guid id, [FromBody] AirplaneDTO airplaneDTO)
        {
            if (ModelState.IsValid)
            {
                Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(id);
                Airplane updatedAirplane = await airplaneRepo.GetAirplaneByName(airplaneDTO.Name);

                if (airplane == null || updatedAirplane != airplane)
                {
                    return BadRequest();
                }

                await genericAirplaneRepo.Update(updatedAirplane, id);
            }
            else
            {
                return BadRequest(); 
            }
            try
            {
                await genericAirplaneRepo.SaveAsync(); 
            }
            catch (Exception ex)
            {

                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Updating airplane failed {ex}"
                });
            }

            return Ok(airplaneDTO); 
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
            Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
            Location createdLocation = await genericLocationRepo.Create(location);

            if (ModelState.IsValid)
            {
                
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
        [HttpPost("/api/flights/airplane/seat")]
        public async Task<ActionResult<SeatDTO>> PostSeat([FromBody] SeatDTO seatDTO)
        {
            
            //  Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
            // Location createdLocation = await genericLocationRepo.Create(location);
            if(seatDTO == null) return BadRequest(new { Message = "No seat input" });

            try
            {
                Seat seat = mapper.Map<Seat>(seatDTO);
                //Airplane airplane = await genericAirplaneRepo.GetAsyncByGuid(seat.AirplaneId);
                //if (airplane)
                Airplane airplane = new Airplane();
                if(await genericAirplaneRepo.Exists(airplane, seat.AirplaneId))
                {
                    var result = await seatRepo.Create(seat);
                    if (result == null) return BadRequest(new { Message = $"Seat {seatDTO.Name} could not be saved" });
                    return Created("api/flights/airplane/seat", seatDTO);
                }
                else
                {
                    return RedirectToAction("HandleErrorCode", "Error", new
                    {
                        statusCode = 404,
                        errorMessage = $"Could not find airplane with id: {seat.AirplaneId}"
                    });
                }
                
                
            }
            catch (Exception ex)
            {

                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating seat {seatDTO.Name} failed : {ex}"
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
        public async Task<ActionResult<FlightCreateEditDTO>> PostFlight([FromBody] FlightCreateEditDTO flightDTO)
        {
            try
            {
                //DTO in body is leeg 
                if (flightDTO == null)
                {
                    return BadRequest(new { Message = "No flight input " });
                }
                //var flight = mapper.Map<Flight>(flightDTO);
                Flight newFlight = new Flight(); 

                //bestaat vliegtuig al? 
                var airplaneByName = await airplaneRepo.GetAirplaneByName(flightDTO.AirplaneDTO.Name);
               
                if (airplaneByName == null) // nee 
                {
                    await PostAirplane(flightDTO.AirplaneDTO);
                    var airplaneName = await airplaneRepo.GetAirplaneByName(flightDTO.AirplaneDTO.Name);
                    newFlight.AirplaneId = airplaneName.Id; 
                }
                else //ja 
                {
                    newFlight.AirplaneId = airplaneByName.Id;
                }

                var departureByName = await departureRepo.GetDepartureByLocationAirport(flightDTO.DepartureDTO.LocationDTO.Airport);
                if (departureByName == null)
                {
                    await PostDeparture(flightDTO.DepartureDTO);
                    var departureName = await departureRepo.GetDepartureByLocationAirport(flightDTO.DepartureDTO.LocationDTO.Airport);
                    newFlight.DepartureId = departureName.Id;
                }
                else
                {
                    newFlight.DepartureId = departureByName.Id;
                }
                var destinationByName = await destinationRepo.GetDestinationByLocationAirport(flightDTO.DestinationDTO.LocationDTO.Airport);
                if (destinationByName == null)
                {
                    await PostDestination(flightDTO.DestinationDTO);
                    var destinationName = await destinationRepo.GetDestinationByLocationAirport(flightDTO.DestinationDTO.LocationDTO.Airport);
                    newFlight.DestinationId = destinationName.Id;
                }
                else
                {
                    newFlight.DestinationId = destinationByName.Id;
                }

                //model state unvalid 
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    newFlight.TimeOfArrival = flightDTO.TimeOfArrival;
                    newFlight.TimeOfDeparture = flightDTO.TimeOfDeparture; 
                    await genericFlightRepo.Create(newFlight);
             
                    return CreatedAtAction("GetFlightDetails", new { id = newFlight.Id }, mapper.Map<FlightCreateEditDTO>(newFlight));
                }
                catch (Exception ex)
                {
                    return RedirectToAction("HandleErrorCode", "Error", new
                    {
                        statusCode = 400,
                        errorMessage = $"Creating flight failed {ex}"
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
