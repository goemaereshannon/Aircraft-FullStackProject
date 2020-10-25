using System;
using System.Collections.Generic;
using System.Text;
using IdentityServices.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityServices.Data
{
    public class ApplicationDbContext : IdentityDbContext<User, Role, Guid,  IdentityUserClaim<Guid>, IdentityUserRole<Guid>, IdentityUserLogin<Guid>, IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        { 
        }

        //public DbSet<User> Users { get; set; }
        //public DbSet<Role> Roles { get; set; }
        //public DbSet<UserRole> UserRoles{ get; set;}
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => new { e.Id });
                entity.HasMany(e => e.UserRoles)
                .WithOne(entity => entity.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();
                entity.HasOne(e => e.Address);

            });
            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => new { e.Id });
                entity.HasMany(e => e.UserRoles)
                .WithOne(entity => entity.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            });

            //modelBuilder.Entity<UserRole>(entity =>
            //{


            //    //Gezien de aangepaste tussentabellen(!) is het NOODZAKELIJK  om de PK/FK
            //    // instructies aan te maken voor SQL SERVER. Zoniet gebruikt/maakt het EF zijn eigen 
            //    // relaties aan en krijg je dubbel aangemaakte properties 
            //    // in deze tussentabellen (UserId1, RoleId1).
            //    entity.HasKey(e => new { e.UserId, e.RoleId });

            //    entity.HasOne(d => d.Role)
            //    .WithMany(p => p.UserRoles)
            //    .HasForeignKey(d => d.RoleId);

            //    entity.HasOne(d => d.User)
            //    .WithMany(p => p.UserRoles)
            //    .HasForeignKey(d => d.UserId);

            //});
        }
    }
}
