using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlightServices.Data;
using FlightServices.Models;
using FlightServices.DTOs;
using AutoMapper;
using FlightServices.Repositories;

namespace FlightServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
       
       
        private readonly IReservationRepo reservationRepo;
        private readonly IMapper mapper;
        private readonly IGenericRepo<PriceClass> genericPriceRepo;
        private readonly IGenericRepo<Person> genericPersonRepo;
        private readonly IGenericRepo<ReservedSeat> genericReservedSeatRepo;
        private readonly IFlightRepo flightRepo;
        private readonly IGenericRepo<Seat> genericSeatRepo;
        private readonly IAirplaneRepo airplaneRepo;

        public ReservationsController(IReservationRepo reservationRepo,  IMapper mapper, IGenericRepo<PriceClass> genericPriceRepo, IGenericRepo<Person> genericPersonRepo, IGenericRepo<ReservedSeat> genericReservedSeatRepo, IFlightRepo flightRepo, IGenericRepo<Seat> genericSeatRepo, IAirplaneRepo airplaneRepo)
        {
         
      
            this.reservationRepo = reservationRepo;
            this.mapper = mapper;
            this.genericPriceRepo = genericPriceRepo;
            this.genericPersonRepo = genericPersonRepo;
            this.genericReservedSeatRepo = genericReservedSeatRepo;
            this.flightRepo = flightRepo;
            this.genericSeatRepo = genericSeatRepo;
            this.airplaneRepo = airplaneRepo;
        }

        // GET: api/Reservations
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
        //{
        //    return await _context.Reservations.ToListAsync();
        //}

        // GET: api/Reservations/5
        [HttpGet("api/reservation/{id}")]
        public async Task<ActionResult<ReservationDetailsDTO>> GetReservationDetails(Guid id)
        {
            try
            {
                if (id == Guid.Empty)
                {
                    return BadRequest(new { message = "Id is empty" });
                }
                Reservation reservation = await reservationRepo.GetAsyncByGuid(id);
                ReservationDetailsDTO reservationDetailsDTO = mapper.Map<ReservationDetailsDTO>(reservation);
                return Ok(reservationDetailsDTO);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet("/api/user/reservations/{userId}")]

        public async Task <ActionResult<IEnumerable<ReservationDTO>>> GetReservationsByUserId(Guid userId)
        {
            try
            {
                if (userId == Guid.Empty)
                {
                    return BadRequest(new { message = "Id is empty" });
                }
                IEnumerable<Reservation> reservations = await reservationRepo.GetByExpressionAsync(res => res.UserId == userId);
                foreach(Reservation reservation in reservations)
                {
                   Flight flight = await flightRepo.GetAsyncByGuid(reservation.FlightId);
                    reservation.Flight = flight;
                }
                IEnumerable < ReservationDTO > reservationDTOs = mapper.Map<IEnumerable<ReservationDTO>>(reservations);
                return Ok(reservationDTOs);
            }
            catch (Exception)
            {

                throw;
            }

        }

        // PUT: api/Reservations/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutReservation(Guid id, Reservation reservation)
        //{
        //    if (id != reservation.FlightId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(reservation).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ReservationExists(id))
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
        [HttpPost("/api/reservations/price")]
        public async Task<ActionResult<PriceClassDTO>> PostPrice([FromBody] PriceClassDTO priceDTO)
        {

            //  Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
            // Location createdLocation = await genericLocationRepo.Create(location);
            if (priceDTO == null) return BadRequest(new { Message = "No price input" });

            try
            {
                PriceClass price = mapper.Map<PriceClass>(priceDTO);
                var result = await genericPriceRepo.Create(price);
                if (result == null) return BadRequest(new { Message = $"Price {priceDTO.Value} could not be saved" });
                return Created("api/reservations/price", priceDTO);

            }
            catch (Exception ex)
            {

                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating price {priceDTO} failed : {ex}"
                });
            }

        }
        [HttpPost("/api/reservations/person")]
        public async Task<ActionResult<PersonDTO>> PostPerson([FromBody] PersonDTO personDTO)
        {

            //  Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
            // Location createdLocation = await genericLocationRepo.Create(location);
            if (personDTO == null) return BadRequest(new { Message = "No price input" });

            try
            {
                Person person = mapper.Map<Person>(personDTO);
                var result = await genericPersonRepo.Create(person);
                if (result == null) return BadRequest(new { Message = $"Person {personDTO.FirstName} {personDTO.LastName} could not be saved" });
                return Created("api/reservations/person", personDTO);

            }
            catch (Exception ex)
            {

                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating Person {personDTO.FirstName} {personDTO.LastName} failed : {ex}"
                });
            }

        }
        //[HttpPost("/api/reservations/reservedseat")]
        //public async Task<ActionResult<ReservedSeatDTO>> PostReservedSeat([FromBody] ReservedSeatDTO reservedSeatDTO, Guid reservationId)
        //{

        //    //  Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
        //    // Location createdLocation = await genericLocationRepo.Create(location);
        //    if (reservedSeatDTO == null ) return BadRequest(new { Message = "No seat input" });
        //    if (reservationId == Guid.Empty) return RedirectToAction("HandleErrorCode", "Error", new
        //           {
        //                statusCode = 404,
        //                errorMessage = $"Could not find reservation "
        //            });

        //    try
        //    {
                
                
        //        PriceClass price = new PriceClass();
        //        Seat seat = new Seat();
        //        if(!await genericPriceRepo.Exists(price, reservedSeatDTO.PriceId)) return RedirectToAction("HandleErrorCode", "Error", new
        //        {
        //            statusCode = 404,
        //            errorMessage = $"Could not find price."
        //        });
        //        if (!await genericSeatRepo.Exists(seat, reservedSeatDTO.SeatId)) return RedirectToAction("HandleErrorCode", "Error", new
        //        {
        //            statusCode = 404,
        //            errorMessage = $"Could not find seat."
        //        });
        //        price = await genericPriceRepo.GetAsyncByGuid(reservedSeatDTO.PriceId);
        //        ReservedSeat reservedSeat = mapper.Map<ReservedSeat>(reservedSeatDTO);
        //        Reservation reservation = new Reservation();
        //       // if (await reservationRepo.Exists(reservation, reservationId)){
        //            reservation = await reservationRepo.GetAsyncByGuid(reservationId);
        //            reservation.TotalSeats += 1;
        //            reservation.TotalPrice += price.Value;
        //            await reservationRepo.Update(reservation, reservationId);
        //            reservedSeat.ReservationId = reservationId;
        //            var result = await genericReservedSeatRepo.Create(reservedSeat);
        //            if (result == null) return BadRequest(new { Message = $"Reserved seat for {reservedSeatDTO.Person.FirstName} could not be saved" });
        //            return Created("api/reservations/reservedseat", reservedSeatDTO);
        //       // }
        //        //else
        //        //{
        //        //    return RedirectToAction("HandleErrorCode", "Error", new
        //        //    {
        //        //        statusCode = 404,
        //        //        errorMessage = $"Could not find reservation "
        //        //    });
        //        //}

        //    }
        //    catch (Exception ex)
        //    {

        //        return RedirectToAction("HandleErrorCode", "Error", new
        //        {
        //            statusCode = 400,
        //            errorMessage = $"Creating Reserved seat for {reservedSeatDTO.Person.FirstName} failed : {ex}"
        //        });
        //    }

        //}
        // POST: api/Reservations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("/api/reservations")]
        public async Task<ActionResult<CreateReservationDTO>> PostReservation(CreateReservationDTO reservationDTO)
        {
            if (reservationDTO == null ) return BadRequest(new { Message = "No reservation input" });
            //TODO: check if reservation with flightId and userId exists. if it does do put, else continu post.

            try
            {
                Flight flight = await flightRepo.GetAsyncByGuid(reservationDTO.FlightId);
               
                if (flight != null)
                {
                   
                    Reservation reservation = mapper.Map<Reservation>(reservationDTO);
                foreach (ReservedSeat reservedSeat in reservation.ReservedSeats)
                    {
                        PriceClass price = await genericPriceRepo.GetAsyncByGuid(reservedSeat.PriceId);
                        if(price != null)
                        {
                            reservedSeat.TicketPrice = price.Value != 0 && flight.Distance != 0 ? price.Value * (flight.Distance / 1000) : 0;
                           
                            reservation.TotalPrice += reservedSeat.TicketPrice;
                            reservation.TotalSeats += 1;
                            flight.Airplane = await airplaneRepo.GetAsyncByGuid(flight.AirplaneId.Value);
                            flight.Airplane.ReservedSeats += 1;
                            if(flight.Airplane.ReservedSeats == flight.Airplane.TotalSeats)
                            {
                                //TODO: realtime message to admin
                                Console.WriteLine("Airplane is fully booked.");
                            }
                        }
                        else
                        {
                            return RedirectToAction("HandleErrorCode", "Error", new
                            {
                                statusCode = 404,
                                errorMessage = $"Could not find price. "
                            });
                        }
                    }
                
                    var createdReservation = await reservationRepo.Create(reservation);
                    //TODO: check totalseats
                    if (createdReservation == null) return BadRequest(new { Message = $"Reservation could not be saved" });
                    return Created("/api/reservations", reservationDTO);
                }
                else
                {
                    return RedirectToAction("HandleErrorCode", "Error", new
                    {
                        statusCode = 404,
                        errorMessage = $"Could not find flight. "
                    });
                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating reservation failed {ex}"
                });
            }



        }

        //// DELETE: api/Reservations/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Reservation>> DeleteReservation(Guid id)
        //{
        //    var reservation = await _context.Reservations.FindAsync(id);
        //    if (reservation == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Reservations.Remove(reservation);
        //    await _context.SaveChangesAsync();

        //    return reservation;
        //}

        //private bool ReservationExists(Guid id)
        //{
        //    return _context.Reservations.Any(e => e.FlightId == id);
        //}
    }
}
