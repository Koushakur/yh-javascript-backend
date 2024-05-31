using CoursesAPI.Infrastructure.Data.Entities;
using CoursesAPI.Infrastructure.Model;

namespace CoursesAPI.Infrastructure.Factories;

public static class CourseFactory {

    public static CourseEntity CreateEntity(CourseModelWithoutId model) {
        return new CourseEntity {
            ImageURL = model.ImageURL,
            Title = model.Title,
            Author = model.Author,
            PriceOriginal = model.PriceOriginal,
            PriceDiscounted = model.PriceDiscounted,
            Hours = model.Hours,
            Likes = model.Likes,
            LikePercentage = model.LikePercentage,
            BestSeller = model.BestSeller,
            Description = model.Description,
            Content = model.Content,
        };
    }

    public static CourseEntity CreateEntity(CourseModel model) {
        return new CourseEntity {
            Id = model.Id,
            ImageURL = model.ImageURL,
            Title = model.Title,
            Author = model.Author,
            PriceOriginal = model.PriceOriginal,
            PriceDiscounted = model.PriceDiscounted,
            Hours = model.Hours,
            Likes = model.Likes,
            LikePercentage = model.LikePercentage,
            BestSeller = model.BestSeller,
            Description = model.Description,
            Content = model.Content,
        };
    }

    public static CourseModel CreateModel(CourseEntity entity) {
        return new CourseModel {
            Id = entity.Id,
            ImageURL = entity.ImageURL,
            Title = entity.Title,
            Author = entity.Author,
            PriceOriginal = entity.PriceOriginal,
            PriceDiscounted = entity.PriceDiscounted,
            Hours = entity.Hours,
            Likes = entity.Likes,
            LikePercentage = entity.LikePercentage,
            BestSeller = entity.BestSeller,
            Description = entity.Description,
            Content = entity.Content,
        };
    }
}