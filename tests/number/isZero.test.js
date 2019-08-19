require("should");

const isZero = require("../../lib/number/isZero.js");

describe("isZero", function()
{
    it("Should be able to say 0 is zero.", function()
    {
        isZero(0).should.be.exactly(true);
    });

    it("Should be able to say 1 is not zero.", function()
    {
        isZero(1).should.be.exactly(false);
    });

    it("Should be able to say -1 is not zero.", function()
    {
        isZero(-1).should.be.exactly(false);
    });

    it("Should be able to say false is not zero.", function()
    {
        isZero(false).should.be.exactly(false);
    });

    it("Should be able to say true is not zero.", function()
    {
        isZero(true).should.be.exactly(false);
    });

    it("Should be able to say titi is not zero.", function()
    {
        isZero("titi").should.be.exactly(false);
    });
});