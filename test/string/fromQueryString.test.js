require("should");

const fromQueryString = require("../../lib/string/fromQueryString.js");

describe("fromQueryString", function()
{
    it("Should decode a query string.", function()
    {
        let str = "firstname%3DJohn%26middlename%3DEdgar%26lastname%3DHoover";
        let result = fromQueryString(str);

        let expectedResult =
        {
            firstname: "John",
            middlename: "Edgar",
            lastname: "Hoover"
        };

        result.should.eql(expectedResult);
    });
});