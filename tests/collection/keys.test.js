require("should");

const keys = require("../../lib/collection/keys.js");

describe("keys", function()
{
    it("Should give the keys of an array.", function()
    {
        let col = [1,2];
        let result = keys(col);
        let expectedResult = ["0", "1"];

        result.should.eql(expectedResult);
    });

    it("Should give the keys of an object.", function()
    {
        let col = {"titi": "toto", "tata": "tutu"};
        let result = keys(col);
        let expectedResult = ["titi", "tata"];

        result.should.eql(expectedResult);
    });
});