require("should");

const endWith = require("../../lib/string/endWith.js");

describe("endWith", function()
{
    it("Should say toto does not end with tata.", function()
    {
        endWith("toTo", "tata").should.be.exactly(false);
    });

    it("Should say tota ends with ta.", function()
    {
        endWith("tota", "ta").should.be.exactly(true);
    });

    it("Should say a number doesn't end with titi.", function()
    {
        endWith(987, "toto").should.be.exactly(false);
    });
});