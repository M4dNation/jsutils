require("should");

const intersection = require("../../lib/array/intersection.js");

describe("intersection", function()
{
    it("Should get wanted elements.", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = intersection(arr, ["Earth", "Jupiter"]);

        result.should.eql(["Earth", "Jupiter"]);
    });
});