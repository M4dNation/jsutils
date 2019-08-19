require("should");

const invert = require("../../lib/collection/invert.js");

describe("invert", function()
{
    it("Should be able to invert an array.", function()
    {
        let col = [1,2,3,4,5];
        let result = invert(col);
        let expectedResult = { "1": "0", "2": "1", "3": "2", "4": "3", "5": "4" };

        result.should.eql(expectedResult);
    });

    it("Should be able to invert an object.", function()
    {
        let col = {"titi": "toto"};
        let result = invert(col);
        let expectedResult = {"toto": "titi"};

        result.should.eql(expectedResult);
    });
});