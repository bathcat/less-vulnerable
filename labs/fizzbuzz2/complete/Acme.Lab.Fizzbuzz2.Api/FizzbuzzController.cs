using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Acme.Lab.Fizzbuzz2.Api;

[ApiController]
[Route("[controller]")]
public class FizzbuzzController : ControllerBase
{
    public static string ToMessage(int count)
    {
        if (count % 15 == 0)
        {
            return "fizzbuzz";
        }

        if (count % 3 == 0)
        {
            return "fizz";
        }

        if (count % 5 == 0)
        {
            return "buzz";
        }

        return count.ToString();
    }

    [HttpGet]
    public IEnumerable<string> Get()
    {
        for (int i = 1; i <= 100; i++)
        {
            yield return ToMessage(i);
        }
    }
}
