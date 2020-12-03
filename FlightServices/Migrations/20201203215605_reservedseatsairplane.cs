using Microsoft.EntityFrameworkCore.Migrations;

namespace FlightServices.Migrations
{
    public partial class reservedseatsairplane : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "TotalSeats",
                table: "Reservations",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ReservedSeats",
                table: "Airplanes",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReservedSeats",
                table: "Airplanes");

            migrationBuilder.AlterColumn<int>(
                name: "TotalSeats",
                table: "Reservations",
                type: "int",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
