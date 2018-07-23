require("should");

const isNegative = require("../../lib/number/isNegative.js");

describe("isNegative", function()
{
    it("Should be able to say -5 is negative.", function()
    {
        isNegative(-5).should.be.exactly(true);
    });

    it("Should be able to say 0 is negative.", function()
    {
        isNegative(0).should.be.exactly(true);
    });

    it("Should be able to say 5 is not negative.", function()
    {
        isNegative(5).should.be.exactly(false);
    });

    it("Should be able to say titi is not negative.", function()
    {
        isNegative("titi").should.be.exactly(false);
    });
});