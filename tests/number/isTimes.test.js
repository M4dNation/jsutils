require("should");

const isTimes = require("../../lib/number/isTimes.js");

describe("isTimes", function()
{
    it("Should be able to say 20 is 5 times 4.", function()
    {
        isTimes(20, 4, 5).should.be.exactly(true);
    });

    it("Should be able to say 25 is not 6 times 12.", function()
    {
        isTimes(25, 12, 6).should.be.exactly(false);
    });
});