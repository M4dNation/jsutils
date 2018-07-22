require("should");

const at = require("../../lib/array/at.js");

describe("at", function()
{
    it("Should get wanted elements.", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = at(arr, 1);

        result.should.eql(["Mars"]);
    });
});