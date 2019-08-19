require("should");

const urlFriendly = require("../../lib/string/urlFriendly.js");

describe("urlFriendly", function()
{
    it("Should urlfriendly a string.", function()
    {
        let str = "test valeur";
        let result = urlFriendly(str);

        let expectedResult = "test-valeur";

        result.should.eql(expectedResult);
    });
});