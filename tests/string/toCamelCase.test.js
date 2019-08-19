require("should");

const toCamelCase = require("../../lib/string/toCamelCase.js");

describe("toCamelCase", function()
{
    it("Should camelCase a string.", function()
    {
        let str = "test valeur";
        let result = toCamelCase(str);

        let expectedResult = "testValeur";

        result.should.eql(expectedResult);
    });

    it("Should not camelCase a snake_case string.", function()
    {
        let str = "test_valeur";
        let result = toCamelCase(str);

        let expectedResult = "test_valeur";

        result.should.eql(expectedResult);
    });
});