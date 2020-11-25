using AutoMapper;
using FlightServices.Controllers;
using FlightServices.Data;
using FlightServices.DTOs;
using FlightServices.Mapping;
using FlightServices.Models;
using FlightServices.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace FlightServices.UnitTests.Controllers
{
    [TestClass()]
    public class FlightsController_Test : DatabaseTestDB
    {
        private readonly FlightServicesContext context;
        private DbSet<Flight> flightList;
        private DbSet<Departure> departureList;
        private DbSet<Destination> destinationList;
        private DbSet<Airplane> airplaneList;
        private DbSet<Location> locationList; 
        private IMapper mapper;

        private Mock<IGenericRepo<Flight>> mockGenericFlightRepo;
        private Mock<IGenericRepo<Destination>> mockGenericDestinationRepo;
        private Mock<IGenericRepo<Departure>> mockGenericDepartureRepo ;
        private Mock<IGenericRepo<Airplane>> mockGenericAirplaneRepo;
        private Mock<IGenericRepo<Location>> mockGenericLocationRepo;
        private Mock<IFlightRepo> mockFlightRepo;
        private Mock<IDepartureRepo> mockDepartureRepo ;
        private Mock<IDestinationRepo> mockDestinationRepo;
        private Mock<IAirplaneRepo> mockAirplaneRepo ;
        public FlightsController APIcontroller; 

        private Mock<IMemoryCache> mockCache;

        public FlightsController_Test()
        {
            context = Context;
            flightList = Context.Flights;
            departureList = Context.Departures;
            destinationList = Context.Destinations;
            airplaneList = Context.Airplanes;
            locationList = Context.Locations;

            var mapperConfig = new MapperConfiguration(opts =>
            {
                opts.AddProfile(new FlightProfiles());
            });
            this.mapper = mapperConfig.CreateMapper(); 
        }

        [TestInitialize]
        public void TestInitialize() {
            mockGenericFlightRepo = new Mock<IGenericRepo<Flight>>();
            mockGenericDepartureRepo = new Mock<IGenericRepo<Departure>>();
            mockGenericDestinationRepo = new Mock<IGenericRepo<Destination>>();
            mockGenericAirplaneRepo = new Mock<IGenericRepo<Airplane>>();
            mockGenericLocationRepo = new Mock<IGenericRepo<Location>>();
            mockFlightRepo = new Mock<IFlightRepo>();
            mockDepartureRepo = new Mock<IDepartureRepo>();
            mockDestinationRepo = new Mock<IDestinationRepo>();
            mockAirplaneRepo = new Mock<IAirplaneRepo>();

            mockCache = new Mock<IMemoryCache>();
            
            APIcontroller = new FlightsController(mockCache.Object, mockGenericFlightRepo.Object, mockGenericDepartureRepo.Object, mockGenericDestinationRepo.Object, mockGenericAirplaneRepo.Object, mockGenericLocationRepo.Object, mapper, mockDepartureRepo.Object, mockDestinationRepo.Object, mockFlightRepo.Object, mockAirplaneRepo.Object); ;

        }

        [TestMethod()]
        public async Task GetFlights_ReturnsAllFlights()
        {

            mockGenericFlightRepo.Setup(repo => repo.GetAllAsync()).ReturnsAsync(flightList);

            var actionResult = await APIcontroller.GetFlights();
            var okResult = actionResult.Result as OkObjectResult; 
            IEnumerable<Flight> Tasks = okResult.Value as IEnumerable<Flight>;

            Assert.IsNotNull(okResult);

            Assert.IsInstanceOfType(okResult, typeof(OkObjectResult));
            Assert.IsInstanceOfType(okResult.Value, typeof(IEnumerable<Flight>));;

            List<Flight> lst = okResult.Value as List<Flight>;
            Assert.IsTrue(lst.Count() == 2 );
            Assert.AreEqual(200, okResult.StatusCode);
        }

        [TestMethod]
        public async Task GetFlightById_ReturnsFlight_IfIdExists()
        {
            Guid guid = new Guid("d470123f-7795-4158-aa2b-9088e29de88d"); 
            var fakeFlight = flightList.FirstOrDefault(c => c.Id == guid);
            Flight flightTest = new Flight(); 

            var huppeldepup = mockGenericFlightRepo.Setup(repo =>
                repo.GetAsyncByGuid(It.IsAny<Guid>()) //meegeven welke parameter functie verwacht
                    ).ReturnsAsync(flightTest); //meegven welk resultaat functie teruggeeft


            var actionResult = await APIcontroller.GetFlightDetails(guid);
            var okResult = actionResult.Result as OkObjectResult;

            Assert.IsNotNull(okResult);
            Assert.IsInstanceOfType(okResult, typeof(OkObjectResult));
            Assert.IsInstanceOfType(okResult.Value, typeof(Flight));
            Flight flight = okResult.Value as Flight;
            Assert.AreEqual(200, okResult.StatusCode);

        }

        [TestMethod]
        public async Task GetFlightById_ReturnsNotFound404_IfIdDoesNotExist()
        {
            Guid guid = new Guid("e580123f-7795-4158-aa2b-9088e29de88d");
            var fakeFlight = flightList.FirstOrDefault(c => c.Id == guid);
            Flight flightTest = new Flight();

            var huppeldepup = mockGenericFlightRepo.Setup(repo =>
                repo.GetAsyncByGuid(It.IsAny<Guid>()) 
                    ).ReturnsAsync(flightTest);

            var actionResult =  await APIcontroller.GetFlightDetails(guid); 
            NotFoundObjectResult notFoundResult = actionResult.Result as NotFoundObjectResult;

            Assert.IsTrue((notFoundResult.Value.GetType()).Name.Contains("AnonymousType")); 
            Assert.AreEqual(notFoundResult.Value.ToString(), "{ message = Flight not found }"); 
            Assert.AreEqual(404, notFoundResult.StatusCode); 

        }
        //Guid kan niet null zijn enkel Empty(0000-0000-...)

        [TestMethod]
        public async Task PostFlight_ReturnsFlight_IfModelValid()
        {
            LocationDTO departureLocation = new LocationDTO
            {
                City = "Brussels",
                Country = "Belgium",
                Airport = "BRU"
            };
            LocationDTO destinationLocation = new LocationDTO
            {
                City = "London",
                Country = "United Kingdom",
                Airport = "LHR"
            };
            DepartureDTO newDeparture = new DepartureDTO
            {
                LocationDTO = departureLocation
            };
            DestinationDTO newDestination = new DestinationDTO
            {
                LocationDTO = destinationLocation
            };
            AirplaneDTO newAirplane = new AirplaneDTO
            {
                Name = "BA2490",
                Type = "Boeing 737 MAX",
                TotalSeats = 200
            };
            FlightDTO newFlight = new FlightDTO
            {
                Id = Guid.NewGuid(),
                FlightStatus = "On time",
                DepartureDTO = newDeparture,
                DestinationDTO = newDestination,
                TimeOfDeparture = DateTime.Parse("12-12-2020 15:00"),
                TimeOfArrival = DateTime.Parse("12-12-2020 15:42"),
                AirplaneDTO = newAirplane

            };

            mockGenericFlightRepo.Setup(repo => repo.Create(It.IsAny<Flight>())).Returns(Task.FromResult(mapper.Map<FlightDTO, Flight>(newFlight)));

            mockGenericFlightRepo.Verify();

            var actionResult = await APIcontroller.PostFlight(newFlight);
            var createdResult = (CreatedAtActionResult)actionResult.Result;

            Assert.IsNotNull(createdResult); //null
            Assert.IsInstanceOfType(createdResult, typeof(CreatedAtActionResult)); //type
            Assert.IsInstanceOfType(createdResult.Value, typeof(FlightDTO));
            Assert.AreEqual("GetFlight", createdResult.ActionName);
            Assert.AreEqual(201, createdResult.StatusCode);//statuscode
        }

        //[TestMethod]
        //public async Task PostFlight_ReturnsBadRequest400_WhenModelInvalid()
        //{

        //}

        //[TestMethod]
        //public async Task PostFlight_ReturnsBadRequest400_WhenFlightNull()
        //{

        //}

        //[TestMethod]
        //public async Task PostFlight_ReturnsFromErrorController400_WhenException()
        //{

        //}

    }
}
