
using IdentityServices.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServices.Data
{
    public class ApplicationDbContextSeeder
    {
        private readonly ApplicationDbContext context;


        public static async Task SeedAsync(ApplicationDbContext context, IWebHostEnvironment env, RoleManager<Role> roleManager, UserManager<User> userManager)
        {
            try
            {
                //inlezen van setup
                var contenRoot = env.ContentRootPath;
                var webroot = env.WebRootPath;


                await SeedRoles(roleManager);
                await context.SaveChangesAsync();
                await SeedAdmins(userManager, roleManager);
                await context.SaveChangesAsync();

            }
            catch (Exception exc)
            {
                Debug.WriteLine(exc);
                throw;
            }
        }

        private static async Task SeedAdmins(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            var nmbrAdmins = 3;
            for (var i = 1; i<= nmbrAdmins; i++)
            {
                if (userManager.FindByNameAsync("emailAdmin" + i + "@howest.be").Result == null)
                {
                    User admin = new User
                    {
                        Id = Guid.NewGuid(),
                        //UserName = "Admin@" + i,
                        Email = "emailAdmin" + i + "@howest.be",
                        UserName = "emailAdmin" + i + "@howest.be",
                        //CardNumber= $"{i}{i}{i}{i} {i}{i}{i}{i} {i}{i}{i}{i} {i}{i}{i}{i}",
                        //Address = new Address
                        //{
                        //    StreetName = "Graaf Karel De Goedelaan",
                        //    HouseNumber = 5,
                        //    PostCode = "8850",
                        //    City = "Kortrijk",
                        //    Country = "België"

                        //},
                        //BirthDate = Convert.ToDateTime("07/11/1995")

                    };
                    await userManager.CreateAsync(admin, $"Admin@{i}") ;
                    var role = roleManager.Roles.Where(r => r.Name.StartsWith("A")).FirstOrDefault();
                   var userResult = await userManager.AddToRoleAsync(admin, role.Name);

                    if (!userResult.Succeeded )
                    {
                        throw new InvalidOperationException("Failed to build user and roles");
                    }
                }
            }
            
        }

        private static async Task SeedRoles(RoleManager<Role> roleManager)
        {
            string[] roleNames = { "Admin", "Customer", "Visitor" };
            foreach(var roleName in roleNames)
            {
                var roleExist = await roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    await roleManager.CreateAsync(new Role(roleName)); //role aanmaken via constructor van ons eigen role model
                    
                }
            }
        }
    }
}
