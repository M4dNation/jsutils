require("should");

const isNumeric = require("../../lib/string/isNumeric.js");

describe("isNumeric", function()
{
    it("Should say 44444 is a numeric french.", function()
    {
        isNumeric("44444", "fr-FR").should.be.exactly(true);
    });

    it("Should say La mariée ira mal is not a numeric french.", function()
    {
        isNumeric("La mariée ira mal", "fr-FR").should.be.exactly(false);
    });

    it("Should say niño is not a numeric french.", function()
    {
        isNumeric("niño5", "fr-FR").should.be.exactly(false);
    });

    it("Should say 12345 is an numeric spanish.", function()
    {
        isNumeric("12345", "es-ES").should.be.exactly(true);
    });
});