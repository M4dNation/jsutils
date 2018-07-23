require("should");

const isOdd = require("../../lib/number/isOdd.js");

describe("isOdd", function()
{
    it("Should be able to say 1 is odd.", function()
    {
        isOdd(1).should.be.exactly(true);
    });

    it("Should be able to say 0 is not odd.", function()
    {
        isOdd(0).should.be.exactly(false);
    });

    it("Should be able to say -1 is odd.", function()
    {
        isOdd(-1).should.be.exactly(true);
    });

    it("Should be able to say false is not odd.", function()
    {
        isOdd(false).should.be.exactly(false);
    });

    it("Should be able to say true is not odd.", function()
    {
        isOdd(true).should.be.exactly(false);
    });

    it("Should be able to say titi is not odd.", function()
    {
        isOdd("titi").should.be.exactly(false);
    });
});