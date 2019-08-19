require("should");

const toQueryString = require("../../lib/object/toQueryString.js");

describe("toQueryString", function()
{
    it("Should create a valid query string.", function()
    {
        let obj = {firstname: "John", middlename: "Edgar", lastname: "Hoover"};
        let result = toQueryString(obj);
        let expectedResult = "firstname%3DJohn%26middlename%3DEdgar%26lastname%3DHoover";

        result.should.be.exactly(expectedResult);
    });
});