using AutoMapper;
using FlightServices.DTOs;
using FlightServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Mapping
{
    public class FlightProfiles:Profile
    {
        public FlightProfiles()
        {
            InitFlightMapper();
        }

        private void InitFlightMapper()
        {
            CreateMap<FlightDTO, Flight>().ForMember(dest => dest.Departure, opt => opt.MapFrom(model => new Departure()
            {
                Location = model.DepartureDTO.Location

            }))
                .ForMember(dest => dest.Destination, opt => opt.MapFrom(model => new Destination()
                {
                    Location = model.DestinationDTO.Location,
                }))
                .ForMember(dest => dest.Airplane, opt => opt.MapFrom(model => new Airplane()
                {
                    Name = model.AirplaneDTO.Name,
                    Type = model.AirplaneDTO.Type,
                    TotalSeats = model.AirplaneDTO.TotalSeats,
                }));
            CreateMap<Flight, FlightDTO>().ForMember(dest => dest.DepartureDTO, opt => opt.MapFrom(model => new Departure()
            {
                Location = model.Departure.Location

            }))
               .ForMember(dest => dest.DestinationDTO, opt => opt.MapFrom(model => new Destination()
               {
                   Location = model.Destination.Location,
               }))
               .ForMember(dest => dest.AirplaneDTO, opt => opt.MapFrom(model => new Airplane()
               {
                   Name = model.Airplane.Name,
                   Type = model.Airplane.Type,
                   TotalSeats = model.Airplane.TotalSeats,
               }));
        }
    }
}
