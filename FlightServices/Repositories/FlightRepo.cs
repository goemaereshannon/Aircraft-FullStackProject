using FlightServices.DTOs;
using FlightServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlightServices.Repositories
{
    public class FlightRepo : IFlightRepo
    {
        private readonly IGenericRepo<Flight> genericFlightRepo;

        public FlightRepo(IGenericRepo<Flight> genericFlightRepo)
        {
            this.genericFlightRepo = genericFlightRepo;
        }

        public async Task<IEnumerable<Flight>> GetTiming(FlightSearchDTO flightSearchDTO, IEnumerable<Flight> flightsResult) 
        {
            if (flightSearchDTO.DestinationTime != null)
            {
                IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(f => f.TimeOfDeparture.Date == flightSearchDTO.DepartureTime);
                List<Flight> result2 = new List<Flight>();
                foreach (var item in result)
                {
                    foreach (var flight in flightsResult)
                    {
                        if (item.Id == flight.Id)
                        {
                            result2.Add(item);
                        }
                    }
                }
                return result;
            }
            else
            {
                return flightsResult;
            }
        } 

        public async Task<IEnumerable<Flight>> GetFlightsByDateBasedOnDestination(FlightSearchDTO flightSearchDTO, IEnumerable<Flight> flightsResult)
        {
            List<Flight> destResult = new List<Flight>();
            //dest werd ingevuld 
            if (!string.IsNullOrEmpty(flightSearchDTO.Destination))
            {

                try
                {
                    IEnumerable<Flight> result = await genericFlightRepo.GetByExpressionAsync(
                    f =>
                    f.Destination.Location.City.Contains(flightSearchDTO.Destination) ||
                    f.Destination.Location.Country.Contains(flightSearchDTO.Destination));

                    foreach (var item in result)
                    {
                        foreach (var flight in flightsResult)
                        {
                            if (item.Id == flight.Id)
                            {
                                destResult.Add(item);
                            }
                        }
                    }
                    // dest en time werd ingevuld 
                    if (flightSearchDTO.DestinationTime != null)
                    {
                        IEnumerable<Flight> DestAndTResult = await GetTiming(flightSearchDTO, flightsResult);
                        return DestAndTResult; 
                    }
                    //enkel dest 
                    else
                    {
                        return destResult; 
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }

            }
            //geen dest ingevuld 
            else
            {
                IEnumerable<Flight> flights = await GetTiming(flightSearchDTO, flightsResult);
                return flights; 
            } 


        }
    }
}
