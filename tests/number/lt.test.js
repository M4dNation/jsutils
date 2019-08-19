require("should");

const lt = require("../../lib/number/lt.js");

describe("lt", function()
{
    it("Should be able to say 3 is lower than 520.", function()
    {
        lt(3, 520).should.be.exactly(true);
    });

    it("Should be able to say 0 is lower than 3.", function()
    {
        lt(0, 3).should.be.exactly(true);
    });

    it("Should be able to say -10 is lower than 0.", function()
    {
        lt(-10, 0).should.be.exactly(true);
    });

    it("Should be able to say -30 is lower than -10.", function()
    {
        lt(-30, -10).should.be.exactly(true);
    });
});