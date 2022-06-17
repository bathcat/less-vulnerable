using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Acme.Lab.Fizzbuzz2.Api;





[ApiController]
[Route("[controller]")]
public class FizzbuzzController : ControllerBase
{
    /// <summary>
    /// Gets a message.
    /// </summary>
    /// <param name="count"></param>
    /// <returns></returns>
    /// <remarks>
    /// Ideally, use your implementation from last time-- or write it from scratch.
    /// But if you want to cheat, there's an implementation below.
    /// </remarks>
    public static string ToMessage(int count)
    {

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


//public static string ToMessage(int count)
//{
//	if (count % 15 == 0)
//	{
//		return "fizzbuzz";
//	}

//	if (count % 3 == 0)
//	{
//		return "fizz";
//	}

//	if (count % 5 == 0)
//	{
//		return "buzz";
//	}

//	return count.ToString();
//}
