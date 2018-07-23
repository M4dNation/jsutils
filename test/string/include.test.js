require("should");

const include = require("../../lib/string/include.js");

describe("include", function()
{
    it("Should say toto does not include tata.", function()
    {
        include("toTo", "tata").should.be.exactly(false);
    });

    it("Should say toto includes to.", function()
    {
        include("toto", "to").should.be.exactly(true);
    });

    it("Should say a number doesn't include titi.", function()
    {
        include(987, "toto").should.be.exactly(false);
    });
});