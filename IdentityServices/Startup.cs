using IdentityServices.Data;
using IdentityServices.Mapping;
using IdentityServices.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;
using System.IO;
using System.Reflection;
using AutoMapper;
using IdentityServices.Repositories;

namespace IdentityServices
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


            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));



            //>>>aanpassen voor customised user en rol -----------------------------------------

            //services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
            //    .AddEntityFrameworkStores<ApplicationDbContext>();

            //overbrengen naar identityhoststartup.cs
            //services.AddDefaultIdentity<User>(options => options.SignIn.RequireConfirmedAccount = false)
            //    .AddRoles<Role>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>();

            //!!!!!! bIJ CUSTOMISED USER MOET JE DAT AANPASSEN IN _LOGINPARTIAL !!!

            services.AddControllersWithViews();
            services.AddRazorPages();

            //repos
            services.AddScoped(typeof(IGenericRepo<>), typeof(GenericRepo<>));
            services.AddScoped<IUserRepo, UserRepo>();

            

            //mapper
            services.AddAutoMapper(typeof(IdentityProfiles));

            // Startup – configureServices voor Swagger


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "AircraftIdentity_DB", Version = "v1" });
              //  c.SwaggerDoc("v2", new OpenApiInfo { Title = "RecipesAPI latest", Version = "v2" });
                //1. Vul de service registratie aan met Set path voor triple-slash comments ( see Microsoft docs)
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                //2. Include de xml file 
                c.IncludeXmlComments(xmlPath);
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDbContext context, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();
            RoleManager<Role> roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
            UserManager<User> userManager = serviceProvider.GetRequiredService<UserManager<User>>();

            ApplicationDbContextSeeder.SeedAsync(context, env, roleManager, userManager).Wait();
            app.UseSwagger(); //enable swagger
            app.UseSwaggerUI(c =>
            {
                c.RoutePrefix = "swagger"; //path naar de UI: /swagger/index.html
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "AircraftIdentity_DB v1");
               // c.SwaggerEndpoint("/swagger/v2/swagger.json", "Recipes_DB latest");
            });


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                     name: "default",
                     pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });

        }
    }
}
