using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

namespace Gateway
{
    public class Startup

    {
        private readonly IConfiguration configuration;

        public Startup( IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOcelot();

            services.AddAuthentication(svc =>
            {
                svc.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                svc.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(configuration.GetSection("Tokens:AuthenticationProviderKey").Value,
            options =>
            {
                options.RequireHttpsMetadata = false;
                //options.Audience = //Configuration.GetSection("Tokens:Audience").Value;
                //options.ClaimsIssuer = Configuration.GetSection("Tokens:Issuer").Value;
                options.TokenValidationParameters = new TokenValidationParameters()
                 {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = configuration["Tokens:Issuer"],
                    ValidAudience = configuration["Tokens:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Tokens:Key"]))
                };
                options.SaveToken = true;

            });
            services.AddCors(options =>
            {
                options.AddPolicy("MyAllowOrigins", builder =>
                {
                    builder.AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowAnyOrigin() // niet toegelaten indien credentials
                   // .WithOrigins("https://localhost", "http://localhost")
                    //.AllowCredentials()
                    ;
                });
            });
            ////swagger 
            //services.AddSwaggerGen(c =>
            //{
            //    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Ocelot", Version="v1" });
            //    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
            //    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
            //    c.IncludeXmlComments(xmlPath);
            //});
        }
    

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            var currentUrl = "";
            app.Use((context, next) =>
            {
                currentUrl = context.Request.GetDisplayUrl();
                return next.Invoke();
            });
            app.UseCors("MyAllowOrigins");

            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                //  endpoints.MapControllers();
                {
                    endpoints.MapGet("/", async context =>
                    {
                        if (env.IsDevelopment())
                        {
                            await context.Response.WriteAsync(
                                    $"<div>Hello World van (Docker en)  Ocelot gateway op {currentUrl} !</div>" +
                                    "<ul>" +
                                  // "<li><a href='/categories'>Lijst van categori&euml;n-API </a></li>" +
                                  //"<li><a href='/recipes'>Lijst van gerechten-API </a></li>" +
                                  //  "<li><a href='/carts'>Shopping cart-API van onze testuser.(Beveiligd &#x1F61C; )</a></li>" +
                                    "</ul>")
                                ;
                        };
                    });

                }
            });
            //ocelot (wel methode Configure async maken)
            //app.Map("/swagger/v1/swagger.json", b =>
            //{
            //    b.Run(async x => {
            //        var json = File.ReadAllText("swagger.json");
            //        await x.Response.WriteAsync(json);
            //    });
            //});
            //app.UseSwaggerUI(c =>
            //{
            //    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Ocelot");
            //});
           app.UseOcelot().Wait();
        }
    }
}
