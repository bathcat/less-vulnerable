using Acme.Lab.Xss.Api.Core;
using Microsoft.EntityFrameworkCore;
using System;

namespace Acme.Lab.Xss.Api.Data;



public class BlogDbContext : DbContext
{
    public DbSet<Post> Posts { get; set; }

    public string DbPath { get; }

    public BlogDbContext()
    {
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "blog.db");
    }

    // The following configures EF to create a Sqlite database file in the
    // special "local" folder for your platform.
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}