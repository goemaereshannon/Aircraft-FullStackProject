using Microsoft.EntityFrameworkCore.Migrations;

namespace FlightServices.Migrations
{
    public partial class calculatedprop2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "TicketPrice",
                table: "ReservedSeats",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TicketPrice",
                table: "ReservedSeats");
        }
    }
}
