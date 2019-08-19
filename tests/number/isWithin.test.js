require("should");

const isWithin = require("../../lib/number/isWithin.js");

describe("isWithin", function()
{
    it("Should be able to say 0 is between 1 & -1.", function()
    {
        isWithin(0, 1, -1).should.be.exactly(true);
    });

    it("Should be able to say 1 is not between zero and -1.", function()
    {
        isWithin(1, 0, -1).should.be.exactly(false);
    });

    it("Should be able to say -1 is between itself.", function()
    {
        isWithin(-1, -1, -1).should.be.exactly(true);
    });

    it("Should be able to say 23 is not between titi and tata.", function()
    {
        isWithin(23, "titi", "tata").should.be.exactly(false);
    });

    it("Should be able to say true is not between 25 and 50.", function()
    {
        isWithin(true, 25, 50).should.be.exactly(false);
    });

    it("Should return false when no interval passed.", function()
    {
        isWithin(0).should.be.exactly(false);
    });
});