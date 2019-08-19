require("should");

const isTriple = require("../../lib/number/isTriple.js");

describe("isTriple", function()
{
    it("Should be able to say 27 is the triple of 9.", function()
    {
        isTriple(27, 9).should.be.exactly(true);
    });

    it("Should be able to say 53 is not the triple of 11.", function()
    {
        isTriple(53, 11).should.be.exactly(false);
    });
});