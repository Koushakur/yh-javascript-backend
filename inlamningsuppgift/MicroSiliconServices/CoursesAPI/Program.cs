using CoursesAPI.Infrastructure.Data.Contexts;
using CoursesAPI.Infrastructure.GQL;
using CoursesAPI.Infrastructure.Services;
using HotChocolate.AzureFunctions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.Functions.Worker;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureFunctionsWebApplication()
    .ConfigureServices(services => {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();

        services.AddPooledDbContextFactory<DataContext>(x =>
            x.UseCosmos(
                Environment.GetEnvironmentVariable("COSMOS_DB_CONNSTRING")!,
                Environment.GetEnvironmentVariable("COSMOS_DB_NAME")!
            ).UseLazyLoadingProxies()
        );

        services.AddScoped<ICourseService, CourseService>();

        services.AddGraphQLFunction()
                .AddQueryType<CourseQuery>()
                .AddMutationType<CourseMutation>()
                .AddType<CourseType>();

        services.AddLogging();

        var sp = services.BuildServiceProvider();
        using var scope = sp.CreateScope();
        var dbf = scope.ServiceProvider.GetRequiredService<IDbContextFactory<DataContext>>();
        using var context = dbf.CreateDbContext();
        context.Database.EnsureCreated();

    })
    .Build();

host.Run();
