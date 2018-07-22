require("should");

const difference = require("../../lib/array/difference.js");

describe("difference", function()
{
    it("Should get wanted elements.", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = difference(arr, ["Earth", "Jupiter"]);

        result.should.eql(["Mars"]);
    });
});