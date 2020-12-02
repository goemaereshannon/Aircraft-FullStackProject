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

        public ReservationsController(IGenericRepo<Reservation> genericRepo, IMapper mapper)
        {
         
            this.genericRepo = genericRepo;
            this.mapper = mapper;
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

        // POST: api/Reservations
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("api/reservations")]
        public async Task<ActionResult<Reservation>> PostReservation(CreateReservationDTO reservationDTO)
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
