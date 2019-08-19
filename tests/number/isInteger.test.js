require("should");

const isInteger = require("../../lib/number/isInteger.js");

describe("isInteger", function()
{
    it("Should be able to say -5 is an integer.", function()
    {
        isInteger(-5).should.be.exactly(true);
    });

    it("Should be able to say 0 is an integer.", function()
    {
        isInteger(0).should.be.exactly(true);
    });

    it("Should be able to say 5.122343455657 is not an integer.", function()
    {
        isInteger(5.122343455657).should.be.exactly(false);
    });

    it("Should be able to say titi is not an integer.", function()
    {
        isInteger("titi").should.be.exactly(false);
    });
});