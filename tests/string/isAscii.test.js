require("should");

const isAscii = require("../../lib/string/isAscii.js");

describe("isAscii", function()
{
    it("Should say aaaaa is ascii", function()
    {
        isAscii("aaaaa").should.be.exactly(true);
    });

    it("Should say La mariée ira mal is not ascii", function()
    {
        isAscii("La mariée ira mal").should.be.exactly(false);
    });

    it("Should say 12346677 is ascii", function()
    {
        isAscii("12346677", "fr-FR").should.be.exactly(true);
    });

    it("Should say ¡¡¡¡¡¡¡ is not ascii", function()
    {
        isAscii("¡¡¡¡¡¡¡", "fr-FR").should.be.exactly(false);
    });
});