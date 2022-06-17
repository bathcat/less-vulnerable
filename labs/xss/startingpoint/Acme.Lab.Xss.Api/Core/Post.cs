using System;

namespace Acme.Lab.Xss.Api.Core;


public class Post
{
    public Guid ID { get; set; } = Guid.NewGuid();
    public DateTime CreatedOn { get; set; } = DateTime.Now;
    public string Title { get; set; } = "";
    public string Content { get; set; } = "";
}