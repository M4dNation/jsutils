require("should");

const filter = require("../../lib/collection/filter.js");
const isString = require("../../lib/object/isString.js");

describe("filter", function()
{
    it("Should find a string in an array.", function()
    {
        let col = [0, 1, "test"];

        let result = filter(col, function(v){ return isString(v) ? true : false});

        result.should.eql(["test"]);
    });

    it("Should find a string in an object.", function()
    {
        let col = {"a": 1, "b": "test"};

        let result = filter(col, function(v){ return isString(v) ? true : false});

        result.should.eql(["test"]);
    });
});