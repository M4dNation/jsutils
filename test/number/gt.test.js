require("should");

const gt = require("../../lib/number/gt.js");

describe("gt", function()
{
    it("Should be able to say 520 is greater than 3.", function()
    {
        gt(520, 3).should.be.exactly(true);
    });

    it("Should be able to say 3 is greater than 0.", function()
    {
        gt(3, 0).should.be.exactly(true);
    });

    it("Should be able to say 0 is greater than -10.", function()
    {
        gt(0, -10).should.be.exactly(true);
    });

    it("Should be able to say -10 is greater than -30.", function()
    {
        gt(-10, -30).should.be.exactly(true);
    });
});