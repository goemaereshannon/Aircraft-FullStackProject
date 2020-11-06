
using AutoMapper;
using IdentityServices.Controllers;
using IdentityServices.DTO_s;
using IdentityServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServices.Mapping
{
    public class IdentityProfiles:Profile
    {
        public IdentityProfiles()
        {

            InitUserMApper();
            
            
        }

        private void InitUserMApper()
        {
            CreateMap<UserDTO, User>()
                .ForMember(dest => dest.Address, opt => opt.MapFrom(model => new Address(){
                StreetName = model.AddressDTO.StreetName,
                HouseNumber = model.AddressDTO.HouseNumber,
                City = model.AddressDTO.City,
                Country = model.AddressDTO.Country,
                PostCode = model.AddressDTO.PostCode
            }))
                 .ForMember(dest => dest.BirthDate, opt => opt.MapFrom(model => Convert.ToDateTime(model.BirthDate)));
            CreateMap<User, UserDTO>()
                .ForMember(dest => dest.AddressDTO, opt => opt.MapFrom(model => new AddressDTO() { 
                    StreetName = model.Address.StreetName, 
                    HouseNumber = model.Address.HouseNumber, 
                    City = model.Address.City,
                    Country = model.Address.Country, 
                    PostCode = model.Address.PostCode}))
                 .ForMember(dest => dest.BirthDate, opt => opt.MapFrom(model => model.BirthDate.ToString("dd/MM/yyyy")));


           // CreateMap<User, UserDTO>().ForMember(dest => dest.AddressDTO, opt => opt.MapFrom(model => model.Address));

            CreateMap<User, RegisterDTO>();
            CreateMap<RegisterDTO, User>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(model => model.Email))
                .ForMember(dest => dest.BirthDate, opt => opt.MapFrom(model => Convert.ToDateTime(model.BirthDate)))
                .ForMember(dest => dest.Address, opt => opt.MapFrom(model => new Address()
                {
                    StreetName = model.AddressDTO.StreetName,
                    HouseNumber = model.AddressDTO.HouseNumber,
                    City = model.AddressDTO.City,
                    Country = model.AddressDTO.Country,
                    PostCode = model.AddressDTO.PostCode
                }));
        }
    }
}
