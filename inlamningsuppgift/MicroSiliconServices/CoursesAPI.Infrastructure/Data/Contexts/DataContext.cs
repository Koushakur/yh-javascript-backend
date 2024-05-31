using CoursesAPI.Infrastructure.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoursesAPI.Infrastructure.Data.Contexts;

public class DataContext(DbContextOptions options) : DbContext(options) {

    public DbSet<CourseEntity> Courses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        if (!optionsBuilder.IsConfigured)
            optionsBuilder.UseLazyLoadingProxies();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.Entity<CourseEntity>().ToContainer("Courses");
        modelBuilder.Entity<CourseEntity>().HasPartitionKey(c => c.Id);


    }
}