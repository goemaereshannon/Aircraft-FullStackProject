using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RealTimeServices.Hubs;
using RealTimeServices.Messaging;

namespace RealTimeServices
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddCors(options => {
                options.AddPolicy("MyAllowOrigins", builder => {
                    builder.AllowAnyMethod().AllowAnyHeader()
                    //.AllowAnyOrigin() 
                    .WithOrigins("http://localhost:4200") //naar appSettings… 
                    .AllowCredentials(); //.MUST! 
                });
            });
            //Registratie in ConfigureServices 
            services.AddControllers(options => { options.RespectBrowserAcceptHeader = true; // false by default 
            });
            services.AddSignalR();
            //2.RabbitMQ

            services.Configure<RabbitMqConfiguration>(Configuration.GetSection("RabbitMq"));
           // services.AddTransient<IOrderCreateService, OrderCreateService>();
            services.AddHostedService<Receiver>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
          
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("MyAllowOrigins");
            app.UseRouting();

            app.UseEndpoints(endpoints => { 
                endpoints.MapHub<ChatHub>("/chathub");
                endpoints.MapControllers();
            });
            //Configure pipeline endpoints.MapControllers();
        }
    }
}
