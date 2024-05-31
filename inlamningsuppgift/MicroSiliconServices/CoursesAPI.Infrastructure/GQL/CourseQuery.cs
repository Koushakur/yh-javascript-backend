using CoursesAPI.Infrastructure.Model;
using CoursesAPI.Infrastructure.Services;
using System.Diagnostics;

namespace CoursesAPI.Infrastructure.GQL;

public class CourseQuery(ICourseService service) {
    private readonly ICourseService _service = service;

    [GraphQLName("getCourses")]
    public async Task<List<CourseModel>> GetCoursesAsync() {

        try {
            return await _service.GetCoursesAsync();

        } catch (Exception e) { Debug.WriteLine(e); }
        return null!;
    }

    [GraphQLName("getCourse")]
    public async Task<CourseModel> GetCourseAsync(string id) {

        try {
            return await _service.GetCourseAsync(id);

        } catch (Exception e) { Debug.WriteLine(e); }
        return null!;
    }
}