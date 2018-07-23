require("should");

const isAlphanumeric = require("../../lib/string/isAlphanumeric.js");

describe("isAlphanumeric", function()
{
    it("Should say aaaa is an alphanumeric french.", function()
    {
        isAlphanumeric("aaaa5", "fr-FR").should.be.exactly(true);
    });

    it("Should say La mariée ira mal555 is an alphanumeric french.", function()
    {
        isAlphanumeric("La mariée ira mal555", "fr-FR").should.be.exactly(true);
    });

    it("Should say niño is not an alphanumeric french.", function()
    {
        isAlphanumeric("niño5", "fr-FR").should.be.exactly(false);
    });

    it("Should say niño is an alphanumeric spanish.", function()
    {
        isAlphanumeric("niño5", "es-ES").should.be.exactly(true);
    });
});