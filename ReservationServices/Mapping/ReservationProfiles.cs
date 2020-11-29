using ReservationServices.DTOs;
using ReservationServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace ReservationServices.Mapping
{
    public class ReservationProfiles:Profile
    {
        public ReservationProfiles()
        {
            initReservationMapping();

        }

        private void initReservationMapping()
        {
            CreateMap<Reservation, ReservationDTO>().ReverseMap();
        }
    }
}
