require("should");

const isHexadecimal = require("../../lib/string/isHexadecimal.js");

describe("isHexadecimal", function()
{
    it("Should say aaaaa is hexadecimal", function()
    {
        isHexadecimal("aaaaaa").should.be.exactly(true);
    });

    it("Should say La mariée ira mal is not hexadecimal", function()
    {
        isHexadecimal("La mariée ira mal").should.be.exactly(false);
    });

    it("Should say 12346677 is hexadecimal", function()
    {
        isHexadecimal("123AAFF46677", "fr-FR").should.be.exactly(true);
    });

    it("Should say ¡¡¡¡¡¡¡ is not hexadecimal", function()
    {
        isHexadecimal("¡¡¡¡¡¡¡", "fr-FR").should.be.exactly(false);
    });
});