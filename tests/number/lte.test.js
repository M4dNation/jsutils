require("should");

const lte = require("../../lib/number/lte.js");

describe("lte", function()
{
    it("Should be able to say 3 is lower than or equal to 520.", function()
    {
        lte(3, 520).should.be.exactly(true);
    });

    it("Should be able to say 0 is lower than or equal to 3.", function()
    {
        lte(0, 3).should.be.exactly(true);
    });

    it("Should be able to say -10 is lower than or equal to 0.", function()
    {
        lte(-10, 0).should.be.exactly(true);
    });

    it("Should be able to say -30 is lower than or equal to -10.", function()
    {
        lte(-30, -10).should.be.exactly(true);
    });

    it("Should be able to say 10 is lower than or equal to 10.", function()
    {
        lte(10,10).should.be.exactly(true);
    });

    it("Should be able to say -10 is lower than or equal to -10.", function()
    {
        lte(-10,-10).should.be.exactly(true);
    });
});