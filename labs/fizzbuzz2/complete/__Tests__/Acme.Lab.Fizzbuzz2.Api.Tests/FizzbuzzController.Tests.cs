using NUnit.Framework;

namespace Acme.Lab.Fizzbuzz2.Api.Tests
{
    public class FizzbuzzController_Tests
    {

        [Test]
        public void ToMessage_Should_Get_Buzz_For_5()
        {
            var expected = "buzz";
            var actual = FizzbuzzController.ToMessage(5);
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void ToMessage_Should_Get_Fizz_For_3()
        {
            var expected = "fizz";
            var actual = FizzbuzzController.ToMessage(3);
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}