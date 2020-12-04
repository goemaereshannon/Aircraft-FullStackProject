using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FlightServices.Migrations
{
    public partial class reservationid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeats_Reservations_ReservationFlightId_ReservationUserId",
                table: "ReservedSeats");

            migrationBuilder.DropIndex(
                name: "IX_ReservedSeats_ReservationFlightId_ReservationUserId",
                table: "ReservedSeats");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reservations",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "ReservationFlightId",
                table: "ReservedSeats");

            migrationBuilder.DropColumn(
                name: "ReservationUserId",
                table: "ReservedSeats");

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Reservations",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reservations",
                table: "Reservations",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_ReservedSeats_ReservationId",
                table: "ReservedSeats",
                column: "ReservationId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_FlightId",
                table: "Reservations",
                column: "FlightId");

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeats_Reservations_ReservationId",
                table: "ReservedSeats",
                column: "ReservationId",
                principalTable: "Reservations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeats_Reservations_ReservationId",
                table: "ReservedSeats");

            migrationBuilder.DropIndex(
                name: "IX_ReservedSeats_ReservationId",
                table: "ReservedSeats");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Reservations",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_FlightId",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Reservations");

            migrationBuilder.AddColumn<Guid>(
                name: "ReservationFlightId",
                table: "ReservedSeats",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ReservationUserId",
                table: "ReservedSeats",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Reservations",
                table: "Reservations",
                columns: new[] { "FlightId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_ReservedSeats_ReservationFlightId_ReservationUserId",
                table: "ReservedSeats",
                columns: new[] { "ReservationFlightId", "ReservationUserId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeats_Reservations_ReservationFlightId_ReservationUserId",
                table: "ReservedSeats",
                columns: new[] { "ReservationFlightId", "ReservationUserId" },
                principalTable: "Reservations",
                principalColumns: new[] { "FlightId", "UserId" },
                onDelete: ReferentialAction.Restrict);
        }
    }
}
