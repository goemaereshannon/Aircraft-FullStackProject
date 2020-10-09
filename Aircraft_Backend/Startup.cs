
using System;
using System.IO;
using System.Reflection;
using System.Text;
using Aircraft.API.Mapping;
using Aircraft.Models.Models;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;


namespace Aircraft.API
{
    public class Startup
    {
        private readonly IWebHostEnvironment hostingEnvironment;
        public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            this.hostingEnvironment = hostingEnvironment;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //1. controllers
            services.AddControllers();

            //2. context
            services.AddDbContext<AircraftDbContext>(options =>
                 options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            
            //3. identity/authorisation
            services.AddIdentity<Admin, IdentityRole>()
                .AddEntityFrameworkStores<AircraftDbContext>()
                .AddDefaultTokenProviders()
               .AddTokenProvider("Aircraft", typeof(DataProtectorTokenProvider<Admin>));
            //4.cors
            services.AddCors(options =>
            {
                options.AddPolicy("MyAllowOrigins", builder =>
                {
                    builder.AllowAnyMethod()
                    .AllowAnyHeader()
                    //.AllowAnyOrigin() // niet toegelaten indien credentials
                    .WithOrigins("https://localhost", "http://localhost")
                    .AllowCredentials()
                    ;
                });
            });
            //5. repos

            //6. mapper

            services.AddAutoMapper(typeof(MapperProfile));
            

            //7. swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Aircraf.API", Version = "v1" });
                var xmlCommentsfile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml"; // open properties of API project. in build: define file to save xmlcomments
                var xmlCommentsFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentsfile);
                c.IncludeXmlComments(xmlCommentsFullPath);
            });
            //8. authentication
            services.AddAuthentication().AddJwtBearer(options => {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateIssuerSigningKey = true,
                    ValidateLifetime = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.GetValue<string>("JwtKey")))
                };
                options.RequireHttpsMetadata = false;
                IdentityModelEventSource.ShowPII = true;
            });
            ////9. Serilog
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Warning()
                .WriteTo.RollingFile(hostingEnvironment.ContentRootPath + "Serilogs/Aircaft.APILogging-{Date}.txt")
                .CreateLogger();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //Testdoeleinden:
            Log.Logger.Warning("0000 Serilog Warning test."); //Serilog voorziet zelf  tijd
                                                              //cors

            app.UseCors(cfg =>
            {
                cfg.AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin();
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection(); //resultaat te zien in launchSettings
           
            //identity
            app.UseStaticFiles(); //nodig voor login pagina’s
            app.UseAuthentication(); //Identity >> using Microsoft.AspNetCore.Identity;
            app.UseAuthorization(); //toegang tot welke acties in controllers
           
           
            // Swagger
            app.UseSwagger(); //enable swagger middleware
                              // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.RoutePrefix = "swagger"; //path naar de UI: /swagger/index.html
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Aircraft.API v1");
            });
            app.UseRouting();

        

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseExceptionHandler("/error");
            //TODO: seeder
        }
    }
}
