require("should");

const replace = require("../../lib/collection/replace.js");

describe("replace", function()
{
    it("Should replace some values in an array.", function()
    {
        let col = ["Red", "Green", "Blue"];
        let result = replace(col, function(v) { return v + " is a color."});

        let expectedResult = ["Red is a color.", "Green is a color.", "Blue is a color."];

        result.should.eql(expectedResult);
    });
});