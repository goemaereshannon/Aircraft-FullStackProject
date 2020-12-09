using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using ReviewServices.Data;
using ReviewServices.Repos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace ReviewServices
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
            //MongoDB-configuratie
            services.Configure<MongoSettings>(Configuration.GetSection(nameof(MongoSettings)));
            //MongoDB-registraties
            services.AddSingleton<IMongoSettings>(sp
            => sp.GetRequiredService<IOptions<MongoSettings>>().Value);


            //context en repo's 
            services.AddSingleton<ReviewServicesContext>();
          
            services.AddScoped(typeof(IReviewRepo), typeof(ReviewRepo));
            services.AddScoped<Seeder>();  //gn singleton mogelijk

            //swagger

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Review_DB", Version = "v1" });
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
                                      //.AllowCredentials()
                    ;
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, Seeder seeder )
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("MyAllowOrigins");
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();
            app.UseSwagger(); //enable swagger
            app.UseSwaggerUI(c =>
            {
                c.RoutePrefix = "swagger"; //path naar de UI: /swagger/index.html
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Review_DB v1");
                // c.SwaggerEndpoint("/swagger/v2/swagger.json", "Recipes_DB latest");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            seeder.initDatabase();
        }
    }
}
