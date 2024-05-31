using CoursesAPI.Infrastructure.Factories;
using CoursesAPI.Infrastructure.Model;
using CoursesAPI.Infrastructure.Services;
using System.Diagnostics;

namespace CoursesAPI.Infrastructure.GQL;

public class CourseMutation(ICourseService courseService) {
    private readonly ICourseService _courseService = courseService;

    [GraphQLName("createCourse")]
    public async Task<CourseModel> CreateCourse(CourseModelWithoutId model) {

        try {
            return await _courseService.CreateCourseAsync(model);

        } catch (Exception e) { Debug.WriteLine(e); }
        return null!;
    }

    [GraphQLName("updateCourse")]
    public async Task<CourseModel> UpdateCourse(CourseModel model) {

        try {
            return await _courseService.UpdateCourseAsync(model);

        } catch (Exception e) { Debug.WriteLine(e); }
        return null!;
    }

    [GraphQLName("removeCourse")]
    public async Task<bool> RemoveCourse(string id) {

        try {
            return await _courseService.RemoveCourseAsync(id);

        } catch (Exception e) { Debug.WriteLine(e); }
        return false;
    }
}