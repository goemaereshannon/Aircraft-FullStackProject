using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReservationServices.DTOs;
using ReservationServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReservationServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly GenericRepo<Reservation> reservationRepo;
        private readonly IMapper mapper;

        public ReservationController(GenericRepo<Reservation> reservationRepo, IMapper mapper)
        {
            this.reservationRepo = reservationRepo;
            this.mapper = mapper;
        }
        // GET: api/Flights
        [HttpGet]
        [Route("api/reservations/{userId?}")]
        [ProducesResponseType(typeof(ReservationDTO), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<ReservationDTO>>> GetReservationsByUserID([FromQuery] Guid userId)
        {

            //check incoming data

            if (userId == null) return BadRequest();



            try
            {
                IEnumerable<Reservation> reservations = await reservationRepo.GetByExpressionAsync(r => r.UserId == userId);
                if (reservations == null || reservations.Count() == 0) return NotFound();
                IEnumerable<ReservationDTO> reservationDTOs = mapper.Map<IEnumerable<ReservationDTO>>(reservations);
                return Ok(reservationDTOs);

            }
            catch (Exception ex)
            {

                throw;
            }
        }
        // GET: api/Flights
        [HttpGet]
        [Route("api/reservations/{id}")]
        [ProducesResponseType(typeof(ReservationDTO), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<ReservationDTO>>> GetReservationDetailsByReservationId(Guid id)
        {

            //check incoming data

            if (id == null) return BadRequest();



            try
            {
                IEnumerable<Reservation> reservations = await reservationRepo.GetByExpressionAsync(r => r.UserId == userId);
                if (reservations == null || reservations.Count() == 0) return NotFound();
                IEnumerable<ReservationDTO> reservationDTOs = mapper.Map<IEnumerable<ReservationDTO>>(reservations);
                return Ok(reservationDTOs);

            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost]
        [Route("api/reservation")]
        public async Task<IActionResult> PostReservation([FromBody] ReservationDTO reservationDTO)
        {
            if(reservationDTO == null)
            {
                return BadRequest(new {Message = "No reservation input" });
            }
            Reservation reservation = mapper.Map<Reservation>(reservationDTO);
            if (reservation == null)
            {
                return BadRequest(new { Message = "Not enough data" });
            }


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }
            try
            {
                var result =await reservationRepo.Create(reservation);
                if(result == null)
                {
                    return BadRequest();
                }
                return Created("api/reservations", reservationDTO);
            }
            catch (Exception)
            {
                return  RedirectToAction("HandleErrorCode", "Error", new
                {
                    StatusCode = 400,
                    errrorMessage = $"Creating reservation for flight to {reservationDTO.DepartureCity} failed"
               });
            }

            
        }

    }
}
