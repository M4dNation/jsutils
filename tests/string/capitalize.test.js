require("should");

const capitalize = require("../../lib/string/capitalize.js");

describe("capitalize", function()
{
    it("Should capitalize a string.", function()
    {
        let str = "test valeur";
        let result = capitalize(str);

        let expectedResult = "Test valeur";

        result.should.eql(expectedResult);
    });
});