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

namespace FlightServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
       
        private readonly IGenericRepo<Reservation> genericRepo;
        private readonly IMapper mapper;
        private readonly IGenericRepo<PriceClass> genericPriceRepo;
        private readonly IGenericRepo<Person> genericPersonRepo;
        private readonly IGenericRepo<ReservedSeat> genericReservedSeatRepo;

        public ReservationsController(IGenericRepo<Reservation> genericRepo, IMapper mapper, IGenericRepo<PriceClass> genericPriceRepo, IGenericRepo<Person> genericPersonRepo, IGenericRepo<ReservedSeat> genericReservedSeatRepo)
        {
         
            this.genericRepo = genericRepo;
            this.mapper = mapper;
            this.genericPriceRepo = genericPriceRepo;
            this.genericPersonRepo = genericPersonRepo;
            this.genericReservedSeatRepo = genericReservedSeatRepo;
        }

        // GET: api/Reservations
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
        //{
        //    return await _context.Reservations.ToListAsync();
        //}

        //// GET: api/Reservations/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Reservation>> GetReservation(Guid id)
        //{
        //    var reservation = await _context.Reservations.FindAsync(id);

        //    if (reservation == null)
        //    {
        //        return NotFound();
        //    }

        //    return reservation;
        //}

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
        [HttpPost("/api/reservations/reservedseat")]
        public async Task<ActionResult<ReservedSeatDTO>> PostReservedSeat([FromBody] ReservedSeatDTO reservedSeatDTO, Guid reservationId)
        {

            //  Location location = mapper.Map<Location>(destinationDTO.LocationDTO);
            // Location createdLocation = await genericLocationRepo.Create(location);
            if (reservedSeatDTO == null) return BadRequest(new { Message = "No seat input" });

            try
            {
                
                ReservedSeat reservedSeat = mapper.Map<ReservedSeat>(reservedSeatDTO);
                Reservation reservation = new Reservation(); 

                if(await genericRepo.Exists(reservation, reservationId)){
                    reservedSeat.ReservationId = reservationId;
                    var result = await genericReservedSeatRepo.Create(reservedSeat);
                    if (result == null) return BadRequest(new { Message = $"Reserved seat for {reservedSeatDTO.Person.FirstName} could not be saved" });
                    return Created("api/reservations/reservedseat", reservedSeatDTO);
                }
                else
                {
                    return RedirectToAction("HandleErrorCode", "Error", new
                    {
                        statusCode = 404,
                        errorMessage = $"Could not find reservation "
                    });
                }

            }
            catch (Exception ex)
            {

                return RedirectToAction("HandleErrorCode", "Error", new
                {
                    statusCode = 400,
                    errorMessage = $"Creating Reserved seat for {reservedSeatDTO.Person.FirstName} failed : {ex}"
                });
            }

        }
        // POST: api/Reservations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("/api/reservations")]
        public async Task<ActionResult<CreateReservationDTO>> PostReservation(CreateReservationDTO reservationDTO)
        {
            if (reservationDTO == null ) return BadRequest(new { Message = "No reservation input" });

            try
            {
                Reservation reservation = mapper.Map<Reservation>(reservationDTO);
                var result = await genericRepo.Create(reservation);
                return Created("api/reservations", reservationDTO); 
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
