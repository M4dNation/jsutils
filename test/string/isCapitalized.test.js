require("should");

const isCapitalized = require("../../lib/string/isCapitalized.js");

describe("capitalize", function()
{
    it("Should say the string is capitalized.", function()
    {
        isCapitalized("Toto").should.be.exactly(true);
    });

    it("Should say the string is not capitalized.", function()
    {
        isCapitalized("toto").should.be.exactly(false);
    });
});