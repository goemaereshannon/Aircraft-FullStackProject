using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using ReservationServices.Data;
using ReservationServices.Mapping;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;

namespace ReservationServices
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddDbContext<ReservationDbContext>(options =>
                options.UseSqlServer(
                    //Configuration.GetConnectionString("DefaultConnection"))
                    Configuration.GetConnectionString("Reservation_DB"))
                );
            //repos
            services.AddScoped(typeof(IGenericRepo<>), typeof(GenericRepo<>));
            //mapper
            services.AddAutoMapper(typeof(ReservationProfiles));
            // Startup – configureServices voor Swagger


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FlightReservation_DB", Version = "v1" });
                //  c.SwaggerDoc("v2", new OpenApiInfo { Title = "RecipesAPI latest", Version = "v2" });
                //1. Vul de service registratie aan met Set path voor triple-slash comments ( see Microsoft docs)
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                //2. Include de xml file 
                c.IncludeXmlComments(xmlPath);
            });
            services.AddCors(options =>
            {
                options.AddPolicy("MyAllowOrigins", builder =>
                {
                    builder.AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowAnyOrigin() // niet toegelaten indien credentials
                                      // .WithOrigins("https://localhost", "http://localhost")
                                      // .AllowCredentials()
                    ;
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //            app.UseHttpsRedirection();
            app.UseCors("MyAllowOrigins");
            app.UseRouting();

            app.UseAuthorization();

            //TODO: add seeder
            app.UseSwagger(); //enable swagger
            app.UseSwaggerUI(c =>
            {
                c.RoutePrefix = "swagger"; //path naar de UI: /swagger/index.html
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "FlightReservation_DB v1");
                // c.SwaggerEndpoint("/swagger/v2/swagger.json", "Recipes_DB latest");
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
