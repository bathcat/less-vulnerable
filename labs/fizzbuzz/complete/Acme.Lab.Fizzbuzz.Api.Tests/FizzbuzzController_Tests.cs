namespace Acme.Lab.Fizzbuzz.Api.Tests;

[TestClass]
public class FizzbuzzController_Tests
{
    [TestMethod]
    public void ToMessage_Should_Turn_11_Into_11()
    {
        //
        var expected = 11;

        //
        var actual = FizzbuzzController.ToMessage(expected);

        //
        Assert.AreEqual(expected.ToString(), actual);
    }

    [TestMethod]
    public void ToMessage_Should_Turn_15_Into_fizzbuzz()
    {
        //
        var expected = "fizzbuzz";

        //
        var actual = FizzbuzzController.ToMessage(15);

        //
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void ToMessage_Should_Turn_9_Into_fizz()
    {
        //
        var expected = "fizz";

        //
        var actual = FizzbuzzController.ToMessage(9);

        //
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void ToMessage_Should_Turn_5_Into_buzz()
    {
        //
        var expected = "buzz";

        //
        var actual = FizzbuzzController.ToMessage(5);

        //
        Assert.AreEqual(expected, actual);
    }

    [TestMethod]
    public void Get_Should_Return_100_Things()
    {
        var target = new FizzbuzzController();
        var result = target.Get().ToList();
        Assert.AreEqual(100, result.Count);
    }

    [TestMethod]
    public void Get_Should_Start_With_1()
    {
        var target = new FizzbuzzController();
        var result = target.Get();
        Assert.AreEqual("1", result.First());
    }

    [TestMethod]
    public void Get_Should_End_With_buzz()
    {
        var target = new FizzbuzzController();
        var result = target.Get();
        Assert.AreEqual("buzz", result.Last());
    }
}
