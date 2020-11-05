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
    public class IdentityProfile:Profile
    {
        public IdentityProfile()
        {
            CreateMap<UserDTO, User>().ForMember(dest => dest.Address, opt => opt.MapFrom(model => model.AddressDTO));
            CreateMap<User, UserDTO>().ForMember(dest => dest.AddressDTO, opt => opt.MapFrom(model => model.Address));

            CreateMap<User, RegisterDTO>();
            CreateMap<RegisterDTO, User>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(model => model.Email))
                .ForMember(dest => dest.BirthDate, opt => opt.MapFrom(model => Convert.ToDateTime(model.BirthDate)))
                .ForMember(dest => dest.Address, opt => opt.MapFrom(model => model.AddressDTO));
            
        }

    }
}
