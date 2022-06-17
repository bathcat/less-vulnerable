using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Acme.Lab.Fizzbuzz.Api;

[ApiController]
[Route("[controller]")]
public class FizzbuzzController : ControllerBase
{

    [HttpGet]
    public IEnumerable<string> Get()
    {
        return new String[] { "TODO: Implement fizzbuzz." };
    }
}
