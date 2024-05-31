using CoursesAPI.Infrastructure.Data.Entities;

namespace CoursesAPI.Infrastructure.GQL {
    public class CourseType : ObjectType<CourseEntity> {
        protected override void Configure(IObjectTypeDescriptor<CourseEntity> descriptor) {
            descriptor.Field(c => c.Id).Type<NonNullType<IdType>>();
            descriptor.Field(c => c.ImageURL).Type<StringType>();
            descriptor.Field(c => c.Title).Type<StringType>();
            descriptor.Field(c => c.Author).Type<StringType>();
            descriptor.Field(c => c.PriceOriginal).Type<DecimalType>();
            descriptor.Field(c => c.PriceDiscounted).Type<DecimalType>();
            descriptor.Field(c => c.Hours).Type<IntType>();
            descriptor.Field(c => c.Likes).Type<IntType>();
            descriptor.Field(c => c.LikePercentage).Type<DecimalType>();
            descriptor.Field(c => c.BestSeller).Type<BooleanType>();
            descriptor.Field(c => c.Description).Type<StringType>();
            descriptor.Field(c => c.Content).Type<StringType>();
        }
    }
}