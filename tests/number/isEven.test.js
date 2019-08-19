require("should");

const isEven = require("../../lib/number/isEven.js");

describe("isEven", function()
{
    it("Should be able to say 1 is not even.", function()
    {
        isEven(1).should.be.exactly(false);
    });

    it("Should be able to say 0 is even.", function()
    {
        isEven(0).should.be.exactly(true);
    });

    it("Should be able to say -1 is not even.", function()
    {
        isEven(-1).should.be.exactly(false);
    });

    it("Should be able to say false is not even.", function()
    {
        isEven(false).should.be.exactly(false);
    });

    it("Should be able to say true is not even.", function()
    {
        isEven(true).should.be.exactly(false);
    });

    it("Should be able to say titi is not even.", function()
    {
        isEven("titi").should.be.exactly(false);
    });
});