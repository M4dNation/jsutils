require("should");

const groupBy = require("../../lib/collection/groupBy.js");

describe("groupBy", function()
{
    it("Should group element by length.", function()
    {
        let col = ["Cat", "Dog", "Iguana"];

        let result = groupBy(col, function(s) { return s.length;});
        let expectedResult = { "3": [ "Cat", "Dog" ], "6": [ "Iguana" ] };

        result.should.eql(expectedResult);
    });
});