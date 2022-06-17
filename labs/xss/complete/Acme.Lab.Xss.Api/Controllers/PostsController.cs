using Acme.Lab.Xss.Api.Core;
using Acme.Lab.Xss.Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace Acme.Lab.Xss.Api.Controllers;

[Route("[controller]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly BlogDbContext dbContext;
    private readonly HtmlEncoder htmlEncoder = System.Text.Encodings.Web.HtmlEncoder.Default;

    public PostsController(BlogDbContext context)
    {
        this.dbContext = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Post>> GetAll()
    {
        return await dbContext.Posts.OrderByDescending(p => p.CreatedOn).ToListAsync();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Post>> GetById(Guid id)
    {
        if (dbContext.Posts == null)
        {
            return NotFound();
        }
        var post = await dbContext.Posts.FindAsync(id);

        if (post == null)
        {
            return NotFound();
        }

        return post;
    }





    [HttpPost]
    public async Task<Post> Post([FromBody] Post post)
    {
        post.Content = this.htmlEncoder.Encode(post.Content);
        var result = dbContext.Posts.Add(post);
        await dbContext.SaveChangesAsync();

        return result.Entity;
    }


    [HttpDelete("{id}")]
    public async Task<Post?> Delete(Guid id)
    {
        var post = await dbContext.Posts.FindAsync(id);
        if (post == null)
        {
            return null;
        }

        var result = dbContext.Posts.Remove(post);
        await dbContext.SaveChangesAsync();

        return result.Entity;
    }

    private bool PostExists(Guid id)
    {
        return (dbContext.Posts?.Any(e => e.ID == id)).GetValueOrDefault();
    }
}

