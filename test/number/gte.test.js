require("should");

const gte = require("../../lib/number/gte.js");

describe("gte", function()
{
    it("Should be able to say 520 is greater than or equal to 3.", function()
    {
        gte(520, 3).should.be.exactly(true);
    });

    it("Should be able to say 3 is greater than or equal to 0.", function()
    {
        gte(3, 0).should.be.exactly(true);
    });

    it("Should be able to say 0 is greater than or equal to -10.", function()
    {
        gte(0, -10).should.be.exactly(true);
    });

    it("Should be able to say -10 is greater than or equal to -30.", function()
    {
        gte(-10, -30).should.be.exactly(true);
    });

    it("Should be able to say 10 is greater than or equal to 10.", function()
    {
        gte(10,10).should.be.exactly(true);
    });

    it("Should be able to say -10 is greater than or equal to -10.", function()
    {
        gte(-10,-10).should.be.exactly(true);
    });
});