using Acme.Lab.Xss.Api.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace Acme.Lab.Xss.Api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        builder.Services.AddDbContext<BlogDbContext>();
        builder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(policy =>
            {
                policy.AllowAnyOrigin();
                policy.AllowAnyMethod();
                policy.AllowAnyHeader();
            });
        });

        var app = builder.Build();

        using (var scope = app.Services.CreateScope())
        {
            using var dbContext = scope.ServiceProvider.GetService<BlogDbContext>()!;
            dbContext.Database.EnsureDeleted();
            dbContext.Database.EnsureCreated();
            if (!dbContext.Posts.Any())
            {
                dbContext.Posts.AddRange(
                    new Core.Post { Title = "The First Time I Was Fired", Content = "Lorem ipsum sic dolor" },
                    new Core.Post { Title = "The Second Time I Was Fired", Content = "Lorem ipsum sic dolor" },
                    new Core.Post { Title = "The Third Time I Was Fired", Content = "Lorem ipsum sic dolor" },
                    new Core.Post { Title = "The Fourth Time I Was Fired", Content = "Lorem ipsum sic dolor" },
                    new Core.Post { Title = "The Fifth Time I Was Fired", Content = "Lorem ipsum sic dolor" },
                    new Core.Post { Title = "The Sixth Time I Was Fired", Content = "Lorem ipsum sic dolor" }
                );
                dbContext.SaveChanges();
            }
        }

        // Configure the HTTP request pipeline.

        app.UseCors();
        app.MapControllers();

        app.Run();
    }
}
