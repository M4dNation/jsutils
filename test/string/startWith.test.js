require("should");

const startWith = require("../../lib/string/startWith.js");

describe("startWith", function()
{
    it("Should say toto does not start with tata.", function()
    {
        startWith("toTo", "tata").should.be.exactly(false);
    });

    it("Should say tota starts with to.", function()
    {
        startWith("tota", "to").should.be.exactly(true);
    });

    it("Should say a number doesn't start with titi.", function()
    {
        startWith(987, "toto").should.be.exactly(false);
    });
});