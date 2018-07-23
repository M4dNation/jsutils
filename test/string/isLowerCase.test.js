require("should");

const isLowerCase = require("../../lib/string/isLowerCase.js");

describe("isLowerCase", function()
{
    it("Should say the string is not lower case.", function()
    {
        isLowerCase("toTo").should.be.exactly(false);
    });

    it("Should say the string is lower case.", function()
    {
        isLowerCase("toto").should.be.exactly(true);
    });

    it("Should say the string with number is lower case.", function()
    {
        isLowerCase("toto5").should.be.exactly(true);
    });
});