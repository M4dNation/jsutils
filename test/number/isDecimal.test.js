require("should");

const isDecimal = require("../../lib/number/isDecimal.js");

describe("isDecimal", function()
{
    it("Should be able to say -5 is not a decimal.", function()
    {
        isDecimal(-5).should.be.exactly(false);
    });

    it("Should be able to say 0 is not a decimal.", function()
    {
        isDecimal(0).should.be.exactly(false);
    });

    it("Should be able to say 5.122343455657 is a decimal.", function()
    {
        isDecimal(5.122343455657).should.be.exactly(true);
    });

    it("Should be able to say titi is not a decimal.", function()
    {
        isDecimal("titi").should.be.exactly(false);
    });
});