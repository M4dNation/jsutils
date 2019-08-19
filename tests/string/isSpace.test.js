require("should");

const isSpace = require("../../lib/string/isSpace.js");

describe("capitalize", function()
{
    it("Should say the string is not a space", function()
    {
        isSpace("toTo").should.be.exactly(false);
    });

    it("Should say the string is a space.", function()
    {
        isSpace(" ").should.be.exactly(true);
    });

    it("Should say the number is not a space.", function()
    {
        isSpace(25).should.be.exactly(false);
    });
});