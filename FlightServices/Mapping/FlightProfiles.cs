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
            InitDepartureAndDestinationMapper();
            InitAirplaneMapper(); 
            InitFlightMapper();
            InitReservationMapper();
        }

        private void InitReservationMapper()
        {
            CreateMap<CreateReservationDTO, Reservation>().ReverseMap();
            CreateMap<ReservationDTO, Reservation>().ReverseMap();
            CreateMap<ReservationDetailsDTO, Reservation>().ReverseMap();



            CreateMap<ReservedSeatDTO, ReservedSeat>().ReverseMap();
            CreateMap<PersonDTO, Person>().ReverseMap();
            CreateMap<PriceClassDTO, PriceClass>().ReverseMap();
        }

        private void InitAirplaneMapper()
        {
            CreateMap<AirplaneDTO, Airplane>();
            CreateMap<Airplane, AirplaneDTO>();
            CreateMap<SeatDTO, Seat>().ReverseMap();
        }

        private void InitDepartureAndDestinationMapper()
        {
            CreateMap<DepartureDTO, Departure>()
                .ForMember(dest => dest.Location, opt => opt.MapFrom(model => new Location()
                {
                    Country = model.LocationDTO.Country,
                    City = model.LocationDTO.City,
                    Airport = model.LocationDTO.Airport
                }));
            CreateMap<Departure, DepartureDTO>()
                .ForMember(dest => dest.LocationDTO, opt => opt.MapFrom(model => new LocationDTO()
                {
                    Country = model.Location.Country,
                    City = model.Location.City,
                    Airport = model.Location.Airport
                }));
            CreateMap<DestinationDTO, Destination>()
                .ForMember(dest => dest.Location, opt => opt.MapFrom(model => new Location()
                {
                    Country = model.LocationDTO.Country,
                    City = model.LocationDTO.City,
                    Airport = model.LocationDTO.Airport
                }));
            CreateMap<Destination, DestinationDTO>()
                .ForMember(dest => dest.LocationDTO, opt => opt.MapFrom(model => new LocationDTO()
                {
                    Country = model.Location.Country,
                    City = model.Location.City,
                    Airport = model.Location.Airport
                }));
            CreateMap<Location, LocationDTO>();
            CreateMap<LocationDTO, Location>(); 
        }

        private void InitFlightMapper()
        {
            CreateMap<FlightCreateEditDTO, Flight>().ForMember(dest => dest.Departure, opt => opt.MapFrom(model => new Departure()
            {
                Location = new Location()
                {
                    Airport = model.DepartureDTO.LocationDTO.Airport,
                    Country = model.DepartureDTO.LocationDTO.Country,
                    City = model.DepartureDTO.LocationDTO.City
                }

            }))
                .ForMember(dest => dest.Destination, opt => opt.MapFrom(model => new Destination()
                {
                    Location = new Location()
                    {
                        Airport = model.DestinationDTO.LocationDTO.Airport,
                        Country = model.DestinationDTO.LocationDTO.Country,
                        City = model.DestinationDTO.LocationDTO.City
                    }
                }))
                .ForMember(dest => dest.Airplane, opt => opt.MapFrom(model => new Airplane()
                {
                    Name = model.AirplaneDTO.Name,
                    Type = model.AirplaneDTO.Type,
                    TotalSeats = model.AirplaneDTO.TotalSeats,
                }))
                ;
            CreateMap<Flight, FlightDTO>()
                .ForMember(dest => dest.DepartureDTO, opt => opt.MapFrom(model => new DepartureDTO()
                {
                    LocationDTO = new LocationDTO()
                    {
                        Airport = model.Departure.Location.Airport,
                        Country = model.Departure.Location.Country,
                        City = model.Departure.Location.City

                    }
                }))
               .ForMember(dest => dest.DestinationDTO, opt => opt.MapFrom(model => new DestinationDTO()
               {
                   LocationDTO = new LocationDTO()
                   {
                       Airport = model.Destination.Location.Airport,
                       Country = model.Destination.Location.Country,
                       City = model.Destination.Location.City
                   }
               }))
               .ForMember(dest => dest.AirplaneDTO, opt => opt.MapFrom(model => new AirplaneDTO()
               {
                   Name = model.Airplane.Name,
                   Type = model.Airplane.Type,
                   TotalSeats = model.Airplane.TotalSeats,
               })).ReverseMap();
            CreateMap<Flight, FlightCreateEditDTO>();
            CreateMap<Flight, FlightDTO>()
                .ForMember(dest => dest.DepartureDTO, opt => opt.MapFrom(model => new DepartureDTO()
                {
                    LocationDTO = new LocationDTO()
                    {
                        Airport = model.Departure.Location.Airport,
                        Country = model.Departure.Location.Country,
                        City = model.Departure.Location.City

                    }
                }))
               .ForMember(dest => dest.DestinationDTO, opt => opt.MapFrom(model => new DestinationDTO()
               {
                   LocationDTO = new LocationDTO()
                   {
                       Airport = model.Destination.Location.Airport,
                       Country = model.Destination.Location.Country,
                       City = model.Destination.Location.City
                   }
               }))
               .ForMember(dest => dest.AirplaneDTO, opt => opt.MapFrom(model => new AirplaneDTO()
               {
                   Name = model.Airplane.Name,
                   Type = model.Airplane.Type,
                   TotalSeats = model.Airplane.TotalSeats,
               }))
               .ForMember(dest => dest.Id, opt => opt.MapFrom(model => model.Id)).ReverseMap(); 
               ;
        }
    }
}
