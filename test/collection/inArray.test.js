require("should");

const inArray = require("../../lib/collection/inArray.js");

describe("inArray", function()
{
    it("Should check if an array contain a value.", function()
    {
        let col = [0,1,2,3];

        inArray(col, 2).should.be.exactly(true);
    });

    it("Should check if an object contain a value.", function()
    {
        let col = {"titi" : "toto" };

        inArray(col, "toto").should.be.exactly(true);
    });
});