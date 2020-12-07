using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FlightServices.Migrations
{
    public partial class reservationsystem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Airplanes",
            //    columns: table => new
            //    {
            //        Id = table.Column<Guid>(nullable: false),
            //        Name = table.Column<string>(nullable: false),
            //        Type = table.Column<string>(nullable: true),
            //        TotalSeats = table.Column<int>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Airplanes", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Locations",
            //    columns: table => new
            //    {
            //        Id = table.Column<Guid>(nullable: false),
            //        Country = table.Column<string>(nullable: true),
            //        City = table.Column<string>(nullable: true),
            //        Airport = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Locations", x => x.Id);
            //    });

        //    migrationBuilder.CreateTable(
        //        name: "Persons",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            FirstName = table.Column<string>(nullable: true),
        //            LastName = table.Column<string>(nullable: true)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Persons", x => x.Id);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "Prices",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            BeginDate = table.Column<DateTime>(nullable: false),
        //            EndDate = table.Column<DateTime>(nullable: false),
        //            Value = table.Column<double>(nullable: false),
        //            ClassId = table.Column<Guid>(nullable: true)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Prices", x => x.Id);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "Seats",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            Name = table.Column<string>(nullable: true),
        //            AirplaneId = table.Column<Guid>(nullable: false),
        //            ClassId = table.Column<Guid>(nullable: false)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Seats", x => x.Id);
        //            table.ForeignKey(
        //                name: "FK_Seats_Airplanes_AirplaneId",
        //                column: x => x.AirplaneId,
        //                principalTable: "Airplanes",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "Departures",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            LocationId = table.Column<Guid>(nullable: false)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Departures", x => x.Id);
        //            table.ForeignKey(
        //                name: "FK_Departures_Locations_LocationId",
        //                column: x => x.LocationId,
        //                principalTable: "Locations",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "Destinations",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            LocationId = table.Column<Guid>(nullable: false)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Destinations", x => x.Id);
        //            table.ForeignKey(
        //                name: "FK_Destinations_Locations_LocationId",
        //                column: x => x.LocationId,
        //                principalTable: "Locations",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "Flights",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            TimeOfDeparture = table.Column<DateTime>(nullable: false),
        //            TimeOfArrival = table.Column<DateTime>(nullable: false),
        //            FlightStatus = table.Column<string>(nullable: true),
        //            Distance = table.Column<float>(nullable: false),
        //            DepartureId = table.Column<Guid>(nullable: true),
        //            DestinationId = table.Column<Guid>(nullable: true),
        //            AirplaneId = table.Column<Guid>(nullable: true)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Flights", x => x.Id);
        //            table.ForeignKey(
        //                name: "FK_Flights_Airplanes_AirplaneId",
        //                column: x => x.AirplaneId,
        //                principalTable: "Airplanes",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Restrict);
        //            table.ForeignKey(
        //                name: "FK_Flights_Departures_DepartureId",
        //                column: x => x.DepartureId,
        //                principalTable: "Departures",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Restrict);
        //            table.ForeignKey(
        //                name: "FK_Flights_Destinations_DestinationId",
        //                column: x => x.DestinationId,
        //                principalTable: "Destinations",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Restrict);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "Reservations",
        //        columns: table => new
        //        {
        //            FlightId = table.Column<Guid>(nullable: false),
        //            UserId = table.Column<Guid>(nullable: false)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_Reservations", x => new { x.FlightId, x.UserId });
        //            table.ForeignKey(
        //                name: "FK_Reservations_Flights_FlightId",
        //                column: x => x.FlightId,
        //                principalTable: "Flights",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //        });

        //    migrationBuilder.CreateTable(
        //        name: "ReservedSeats",
        //        columns: table => new
        //        {
        //            Id = table.Column<Guid>(nullable: false),
        //            SeatId = table.Column<Guid>(nullable: false),
        //            PriceId = table.Column<Guid>(nullable: false),
        //            PersonId = table.Column<Guid>(nullable: false),
        //            ReservationId = table.Column<Guid>(nullable: false),
        //            ReservationFlightId = table.Column<Guid>(nullable: true),
        //            ReservationUserId = table.Column<Guid>(nullable: true)
        //        },
        //        constraints: table =>
        //        {
        //            table.PrimaryKey("PK_ReservedSeats", x => x.Id);
        //            table.ForeignKey(
        //                name: "FK_ReservedSeats_Persons_PersonId",
        //                column: x => x.PersonId,
        //                principalTable: "Persons",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //            table.ForeignKey(
        //                name: "FK_ReservedSeats_Prices_PriceId",
        //                column: x => x.PriceId,
        //                principalTable: "Prices",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //            table.ForeignKey(
        //                name: "FK_ReservedSeats_Seats_SeatId",
        //                column: x => x.SeatId,
        //                principalTable: "Seats",
        //                principalColumn: "Id",
        //                onDelete: ReferentialAction.Cascade);
        //            table.ForeignKey(
        //                name: "FK_ReservedSeats_Reservations_ReservationFlightId_ReservationUserId",
        //                columns: x => new { x.ReservationFlightId, x.ReservationUserId },
        //                principalTable: "Reservations",
        //                principalColumns: new[] { "FlightId", "UserId" },
        //                onDelete: ReferentialAction.Restrict);
        //        });

        //    migrationBuilder.InsertData(
        //        table: "Airplanes",
        //        columns: new[] { "Id", "Name", "TotalSeats", "Type" },
        //        values: new object[,]
        //        {
        //            { new Guid("9579b6cd-cad5-4608-88a6-270ce03f5a35"), "KL1730", 200, "Embraer 190" },
        //            { new Guid("9e17af7b-df05-4c69-94b8-586659c7152f"), "BA2490", 200, "Boeing 737 MAX" }
        //        });

        //    migrationBuilder.InsertData(
        //        table: "Locations",
        //        columns: new[] { "Id", "Airport", "City", "Country" },
        //        values: new object[,]
        //        {
        //            { new Guid("c9693b96-3985-4dd5-872b-13b0d3b46f91"), "CDG", "Paris", "France" },
        //            { new Guid("13afe0e4-58da-472e-93f2-4cc67a771143"), "BRU", "Brussels", "Belgium" },
        //            { new Guid("97705f2e-526c-4a26-b240-c2dce5aeccc5"), "JFK", "New York", "United States of America" }
        //        });

        //    migrationBuilder.InsertData(
        //        table: "Departures",
        //        columns: new[] { "Id", "LocationId" },
        //        values: new object[,]
        //        {
        //            { new Guid("4a3d26c2-1665-4281-b87b-2538e2a02459"), new Guid("c9693b96-3985-4dd5-872b-13b0d3b46f91") },
        //            { new Guid("0ae2e025-10a8-4437-8a5b-9ddffc77c180"), new Guid("13afe0e4-58da-472e-93f2-4cc67a771143") },
        //            { new Guid("79a86c66-f7e4-4bc4-9e01-525ad78754bd"), new Guid("97705f2e-526c-4a26-b240-c2dce5aeccc5") }
        //        });

        //    migrationBuilder.InsertData(
        //        table: "Destinations",
        //        columns: new[] { "Id", "LocationId" },
        //        values: new object[,]
        //        {
        //            { new Guid("120dfa74-5a34-42df-8c5d-345e3ec82458"), new Guid("c9693b96-3985-4dd5-872b-13b0d3b46f91") },
        //            { new Guid("628b89e3-ffd4-4659-ba39-c67eee11672b"), new Guid("13afe0e4-58da-472e-93f2-4cc67a771143") },
        //            { new Guid("476f0b19-1a84-4e38-a864-9465944423b7"), new Guid("97705f2e-526c-4a26-b240-c2dce5aeccc5") }
        //        });

        //    migrationBuilder.InsertData(
        //        table: "Flights",
        //        columns: new[] { "Id", "AirplaneId", "DepartureId", "DestinationId", "Distance", "FlightStatus", "TimeOfArrival", "TimeOfDeparture" },
        //        values: new object[] { new Guid("33478a6b-437f-4416-932d-638b1c0415ea"), new Guid("9579b6cd-cad5-4608-88a6-270ce03f5a35"), new Guid("0ae2e025-10a8-4437-8a5b-9ddffc77c180"), new Guid("120dfa74-5a34-42df-8c5d-345e3ec82458"), 0f, "On time", new DateTime(2020, 12, 15, 15, 30, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 15, 15, 0, 0, 0, DateTimeKind.Unspecified) });

        //    migrationBuilder.InsertData(
        //        table: "Flights",
        //        columns: new[] { "Id", "AirplaneId", "DepartureId", "DestinationId", "Distance", "FlightStatus", "TimeOfArrival", "TimeOfDeparture" },
        //        values: new object[] { new Guid("d470123f-7795-4158-aa2b-9088e29de88d"), new Guid("9e17af7b-df05-4c69-94b8-586659c7152f"), new Guid("79a86c66-f7e4-4bc4-9e01-525ad78754bd"), new Guid("628b89e3-ffd4-4659-ba39-c67eee11672b"), 0f, "On time", new DateTime(2020, 12, 15, 18, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2020, 12, 15, 16, 0, 0, 0, DateTimeKind.Unspecified) });

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Departures_LocationId",
        //        table: "Departures",
        //        column: "LocationId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Destinations_LocationId",
        //        table: "Destinations",
        //        column: "LocationId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Flights_AirplaneId",
        //        table: "Flights",
        //        column: "AirplaneId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Flights_DepartureId",
        //        table: "Flights",
        //        column: "DepartureId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Flights_DestinationId",
        //        table: "Flights",
        //        column: "DestinationId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ReservedSeats_PersonId",
        //        table: "ReservedSeats",
        //        column: "PersonId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ReservedSeats_PriceId",
        //        table: "ReservedSeats",
        //        column: "PriceId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ReservedSeats_SeatId",
        //        table: "ReservedSeats",
        //        column: "SeatId");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ReservedSeats_ReservationFlightId_ReservationUserId",
        //        table: "ReservedSeats",
        //        columns: new[] { "ReservationFlightId", "ReservationUserId" });

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Seats_AirplaneId",
        //        table: "Seats",
        //        column: "AirplaneId");
        //}

        //protected override void Down(MigrationBuilder migrationBuilder)
        //{
        //    migrationBuilder.DropTable(
        //        name: "ReservedSeats");

        //    migrationBuilder.DropTable(
        //        name: "Persons");

        //    migrationBuilder.DropTable(
        //        name: "Prices");

        //    migrationBuilder.DropTable(
        //        name: "Seats");

        //    migrationBuilder.DropTable(
        //        name: "Reservations");

        //    migrationBuilder.DropTable(
        //        name: "Flights");

        //    migrationBuilder.DropTable(
        //        name: "Airplanes");

        //    migrationBuilder.DropTable(
        //        name: "Departures");

        //    migrationBuilder.DropTable(
        //        name: "Destinations");

        //    migrationBuilder.DropTable(
        //        name: "Locations");
        }
    }
}
