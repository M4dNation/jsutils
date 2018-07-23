require("should");

const isPalindrome = require("../../lib/string/isPalindrome.js");

describe("isPalindrome", function()
{
    it("Should say radar is a palindrome.", function()
    {
        isPalindrome("radar").should.be.exactly(true);
    });

    it("Should say La mariée ira mal is a palindrome.", function()
    {
        isPalindrome("La mariée ira mal").should.be.exactly(true);
    });

    it("Should say toto is not a palindrome.", function()
    {
        isPalindrome("toto").should.be.exactly(false);
    });
});