using System;
using System.Collections.Generic;
using System.Linq;
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
        
    }
    

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public async void Configure(IApplicationBuilder app, IWebHostEnvironment env)
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
            await app.UseOcelot();
        }
    }
}
