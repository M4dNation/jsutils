require("should");

const isAlpha = require("../../lib/string/isAlpha.js");

describe("isAlpha", function()
{
    it("Should say aaaa is an alpha french.", function()
    {
        isAlpha("aaaa", "fr-FR").should.be.exactly(true);
    });

    it("Should say La mariée ira mal is an alpha french.", function()
    {
        isAlpha("La mariée ira mal", "fr-FR").should.be.exactly(true);
    });

    it("Should say niño is not an alpha french.", function()
    {
        isAlpha("niño", "fr-FR").should.be.exactly(false);
    });

    it("Should say niño is an alpha spanish.", function()
    {
        isAlpha("niño", "es-ES").should.be.exactly(true);
    });
});