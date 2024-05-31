using CoursesAPI.Infrastructure.Data.Contexts;
using CoursesAPI.Infrastructure.Data.Entities;
using CoursesAPI.Infrastructure.Factories;
using CoursesAPI.Infrastructure.Model;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace CoursesAPI.Infrastructure.Services {
    public interface ICourseService {
        Task<CourseModel> CreateCourseAsync(CourseModelWithoutId model);
        Task<CourseModel> GetCourseAsync(string id);
        Task<List<CourseModel>> GetCoursesAsync();
        Task<CourseModel> UpdateCourseAsync(CourseModel model);
        Task<bool> RemoveCourseAsync(string id);
    }

    public class CourseService(IDbContextFactory<DataContext> dataContextFactory) : ICourseService {
        private readonly IDbContextFactory<DataContext> _dataContextFactory = dataContextFactory;

        public async Task<CourseModel> CreateCourseAsync(CourseModelWithoutId model) {

            try {
                await using var context = _dataContextFactory.CreateDbContext();
                var entity = CourseFactory.CreateEntity(model);
                await context.Courses.AddAsync(entity);
                await context.SaveChangesAsync();

                return CourseFactory.CreateModel(entity);
            } catch (Exception e) { Debug.WriteLine(e); }
            return null!;
        }

        public async Task<CourseModel> GetCourseAsync(string id) {
            try {
                await using var context = _dataContextFactory.CreateDbContext();
                var t = await context.FindAsync<CourseEntity>(id);
                var entity = await context.Courses.FirstOrDefaultAsync(c => c.Id == id);

                if (entity == null)
                    return null!;
                else
                    return CourseFactory.CreateModel(entity);

            } catch (Exception e) { Debug.WriteLine(e); }
            return null!;
        }

        public async Task<List<CourseModel>> GetCoursesAsync() {
            try {
                await using var context = _dataContextFactory.CreateDbContext();
                var entities = await context.Courses.ToListAsync();

                return entities.ConvertAll(CourseFactory.CreateModel);

            } catch (Exception e) { Debug.WriteLine(e); }
            return null!;
        }

        public async Task<bool> RemoveCourseAsync(string id) {
            try {
                await using var context = _dataContextFactory.CreateDbContext();
                var ce = await context.Courses.FirstOrDefaultAsync(c => c.Id == id);

                if (ce != null) {
                    context.Courses.Remove(ce);
                    await context.SaveChangesAsync();

                    return true;
                }
            } catch (Exception e) { Debug.WriteLine(e); }
            return false;
        }

        public async Task<CourseModel> UpdateCourseAsync(CourseModel model) {
            try {
                await using var context = _dataContextFactory.CreateDbContext();
                var ce = await context.Courses.FirstOrDefaultAsync(c => c.Id == model.Id);
                if (ce == null) { return null!; }

                var updatedEntity = CourseFactory.CreateEntity(model);
                updatedEntity.Id = ce.Id; //TODO: Check if this is needed

                context.Entry(ce).CurrentValues.SetValues(updatedEntity);
                await context.SaveChangesAsync();
                return CourseFactory.CreateModel(updatedEntity);

            } catch (Exception e) { Debug.WriteLine(e); }
            return null!;
        }
    }
}