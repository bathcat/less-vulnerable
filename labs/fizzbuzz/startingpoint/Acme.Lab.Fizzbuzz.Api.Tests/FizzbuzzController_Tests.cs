namespace Acme.Lab.Fizzbuzz.Api.Tests;

[TestClass]
public class FizzbuzzController_Tests
{
    [TestMethod]
    public void Get_Should_Return_100_Things()
    {
        var target = new FizzbuzzController();
        var result = target.Get().ToList();
        Assert.AreEqual(result.Count, 100);
    }
}
