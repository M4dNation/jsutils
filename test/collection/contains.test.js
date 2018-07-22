require("should");

const contains = require("../../lib/collection/contains.js");

describe("contains", function()
{
    it("Should check if an array contain a value.", function()
    {
        let col = [0,1,2,3];

        contains(col, 2).should.be.exactly(true);
    });

    it("Should check if an object contain a value.", function()
    {
        let col = {"titi" : "toto" };

        contains(col, "toto").should.be.exactly(true);
    });
});