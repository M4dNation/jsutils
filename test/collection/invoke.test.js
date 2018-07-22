require("should");

const invoke = require("../../lib/collection/invoke.js");

describe("invoke", function()
{
    it("Should apply a function to a collection.", function()
    {
        let col = {0: "Tulip", 1: "Daisy"};
        let fn = function(v, a) { return v + a;};

        let result = invoke(col, fn, [" is a flower"]);
        let expectedResult = ["Tulip is a flower", "Daisy is a flower"];

        result.should.eql(expectedResult);
    });
});