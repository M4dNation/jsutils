require("should");

const isUpperCase = require("../../lib/string/isUpperCase.js");

describe("isUpperCase", function()
{
    it("Should say the string is not upper case.", function()
    {
        isUpperCase("toTo").should.be.exactly(false);
    });

    it("Should say the string is not upper case.", function()
    {
        isUpperCase("toto").should.be.exactly(false);
    });

    it("Should say the string with number is not upper case.", function()
    {
        isUpperCase("tOto5").should.be.exactly(false);
    });

    it("Should say the string with number is upper case.", function()
    {
        isUpperCase("TOTO5").should.be.exactly(true);
    });
});