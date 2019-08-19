require("should");

const isPositive = require("../../lib/number/isPositive.js");

describe("isPositive", function()
{
    it("Should be able to say 5 is positive.", function()
    {
        isPositive(5).should.be.exactly(true);
    });

    it("Should be able to say 0 is positive.", function()
    {
        isPositive(0).should.be.exactly(true);
    });

    it("Should be able to say -5 is not positive.", function()
    {
        isPositive(-5).should.be.exactly(false);
    });

    it("Should be able to say titi is not positive.", function()
    {
        isPositive("titi").should.be.exactly(false);
    });
});