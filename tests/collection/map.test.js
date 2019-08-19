require("should");

const map = require("../../lib/collection/map.js");

describe("map", function()
{
    it("Should apply a function to an array.", function()
    {
        let col = ["Red", "Blue", "Green"];
        let fn = function(v) {return v + " is a primary."};
        let expectedResult = ["Red is a primary.", "Blue is a primary.", "Green is a primary."];
        let result = map(col, fn);

        result.should.eql(expectedResult);
    });

    it("Should apply a function to an object.", function()
    {
        let col = {one: "Red", two: "Blue", three: "Green"};
        let fn = function(v) {return v + " is a primary."};
        let expectedResult = ["Red is a primary.", "Blue is a primary.", "Green is a primary."];
        let result = map(col, fn);

        result.should.eql(expectedResult);
    });
});