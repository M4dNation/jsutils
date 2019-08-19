require("should");

const isFinite = require("../../lib/number/isFinite.js");

describe("isFinite", function()
{
    it("Should be able to say 0 is finite.", function()
    {
        isFinite(0).should.be.exactly(true);
    });

    it("Should be able to say 1 is finite.", function()
    {
        isFinite(1).should.be.exactly(true);
    });

    it("Should be able to say -Infinity is not finite.", function()
    {
        isFinite(-Infinity).should.be.exactly(false);
    });

    it("Should be able to say Infinity is not finite.", function()
    {
        isFinite(Infinity).should.be.exactly(false);
    });

    it("Should be able to say true is not finite.", function()
    {
        isFinite(true).should.be.exactly(false);
    });

    it("Should be able to say titi is not finite.", function()
    {
        isFinite("titi").should.be.exactly(false);
    });
});