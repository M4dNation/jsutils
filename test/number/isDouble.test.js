require("should");

const isDouble = require("../../lib/number/isDouble.js");

describe("isDouble", function()
{
    it("Should be able to say 6 is the double of 3.", function()
    {
        isDouble(6, 3).should.be.exactly(true);
    });

    it("Should be able to say 18 is not the double of 8.", function()
    {
        isDouble(18, 8).should.be.exactly(false);
    });
});