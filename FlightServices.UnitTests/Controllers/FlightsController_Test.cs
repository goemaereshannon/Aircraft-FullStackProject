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
        private Mock<IGenericRepo<Seat>> mockGenericSeatRepo;
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
            mockGenericSeatRepo = new Mock<IGenericRepo<Seat>>();
            mockDepartureRepo = new Mock<IDepartureRepo>();
            mockDestinationRepo = new Mock<IDestinationRepo>();
            mockAirplaneRepo = new Mock<IAirplaneRepo>();

            mockCache = new Mock<IMemoryCache>();
            
            APIcontroller = new FlightsController(mockCache.Object, mockGenericFlightRepo.Object, mockGenericDepartureRepo.Object, mockGenericDestinationRepo.Object, mockGenericAirplaneRepo.Object, mockGenericLocationRepo.Object, mapper, mockDepartureRepo.Object, mockDestinationRepo.Object, mockAirplaneRepo.Object, mockGenericSeatRepo.Object); ;

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

            mockGenericFlightRepo.Setup(repo =>
                repo.GetAsyncByGuid(It.IsAny<Guid>()) //meegeven welke parameter functie verwacht
                    ).ReturnsAsync(fakeFlight); //meegven welk resultaat functie teruggeeft

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
            Guid guid = Guid.NewGuid(); //nieuwe guid laten generen --> nog geen flight met dit id in db 
            var fakeFlight = flightList.FirstOrDefault(c => c.Id == guid);

            var huppeldepup = mockGenericFlightRepo.Setup(repo =>
                repo.GetAsyncByGuid(It.IsAny<Guid>()) 
                    ).ReturnsAsync(fakeFlight);

            var actionResult =  await APIcontroller.GetFlightDetails(guid); 
            NotFoundObjectResult notFoundResult = actionResult.Result as NotFoundObjectResult;

            Assert.IsTrue((notFoundResult.Value.GetType()).Name.Contains("AnonymousType")); 
            Assert.AreEqual(notFoundResult.Value.ToString(), "{ message = Flight not found }"); 
            Assert.AreEqual(404, notFoundResult.StatusCode); 

        }
        //Guid kan niet null zijn enkel Empty(0000-0000-...)

        [TestMethod]
        public async Task PostAirplane_ReturnsAirplane_IfModelValid()
        {
            AirplaneDTO newAirplane = new AirplaneDTO
            {
                Name = "BA2490",
                Type = "Boeing 737 MAX",
                TotalSeats = 200
            };


            mockGenericAirplaneRepo.Setup(repo => repo.Create(It.IsAny<Airplane>())).Returns(Task.FromResult(mapper.Map<AirplaneDTO,Airplane>(newAirplane)));
            mockGenericAirplaneRepo.Verify();

            var actionResult = await APIcontroller.PostAirplane(newAirplane);
            var createdResult = (OkObjectResult)actionResult.Result;

            Assert.IsNotNull(createdResult); //null
            Assert.IsInstanceOfType(createdResult, typeof(OkObjectResult)); //type
            Assert.IsInstanceOfType(createdResult.Value, typeof(AirplaneDTO));
            Assert.AreEqual(200, createdResult.StatusCode);//statuscode
        }

        [TestMethod]
        public async Task PutAirplane_ReturnsAirplane_IfModelValid()
        {
            Guid id = new Guid("9e17af7b-df05-4c69-94b8-586659c7152f");
            Airplane fakeAirplane = airplaneList.FirstOrDefault(c => c.Id == id); 
            AirplaneDTO newAirplane = new AirplaneDTO
            {
                Name = "BA2490",
                Type = "Boeing 737 MIN",
                TotalSeats = 200
            };

            mockGenericAirplaneRepo.Setup(repo => repo.GetAsyncByGuid(It.IsAny<Guid>())).Returns(Task.FromResult(fakeAirplane));
            mockAirplaneRepo.Setup(repo => repo.GetAirplaneByName(It.IsAny<string>())).Returns(Task.FromResult(fakeAirplane));
            mockGenericAirplaneRepo.Setup(repo => repo
                .Update(It.IsAny<Airplane>(), It.IsAny<Guid>())) 
                .Returns(Task.FromResult(mapper.Map<AirplaneDTO, Airplane>(newAirplane)));
            mockGenericAirplaneRepo.Verify();

            var actionResult = await APIcontroller.PutAirplane(id, newAirplane);
            var createdResult = (OkObjectResult)actionResult.Result;

            Assert.IsNotNull(createdResult); //null
            Assert.IsInstanceOfType(createdResult, typeof(OkObjectResult)); //type
            Assert.IsInstanceOfType(createdResult.Value, typeof(AirplaneDTO));
            Assert.AreEqual(200, createdResult.StatusCode);//statuscode
        }

    }
}
