using Acme.Lab.Xss.Api.Core;
using Acme.Lab.Xss.Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Acme.Lab.Xss.Api.Controllers;

[Route("[controller]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly BlogDbContext _context;

    public PostsController(BlogDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Post>> GetAll()
    {
        return await _context.Posts.OrderByDescending(p => p.CreatedOn).ToListAsync();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Post>> GetById(Guid id)
    {
        if (_context.Posts == null)
        {
            return NotFound();
        }
        var post = await _context.Posts.FindAsync(id);

        if (post == null)
        {
            return NotFound();
        }

        return post;
    }


    [HttpPut("{id}")]
    public async Task<Post?> Put(Guid id, Post post)
    {
        if (id != post.ID)
        {
            return null;
        }

        _context.Entry(post).State = EntityState.Modified;


        await _context.SaveChangesAsync();



        return null;
    }


    [HttpPost]
    public async Task<Post> Post([FromBody] Post post)
    {
        var result = _context.Posts.Add(post);
        await _context.SaveChangesAsync();

        return result.Entity;
    }


    [HttpDelete("{id}")]
    public async Task<Post?> Delete(Guid id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
        {
            return null;
        }

        var result = _context.Posts.Remove(post);
        await _context.SaveChangesAsync();

        return result.Entity;
    }

    private bool PostExists(Guid id)
    {
        return (_context.Posts?.Any(e => e.ID == id)).GetValueOrDefault();
    }
}

