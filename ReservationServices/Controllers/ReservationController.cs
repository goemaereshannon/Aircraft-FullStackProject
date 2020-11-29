﻿using AutoMapper;
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

        [HttpGet]
        [Route("api/reservation")]
        public async Task<ActionResult<IEnumerable<ReservationDTO>>> GetReservationsByUserID(Guid userId)
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

    }
}
