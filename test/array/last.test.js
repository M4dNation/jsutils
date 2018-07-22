require("should");

const last = require("../../lib/array/last.js");

describe("last", function()
{
    it("Should get the last element.", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = last(arr);

        result.should.be.exactly("Jupiter");
    });

    it("Should get the two first elements", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = last(arr, 2);

        result.should.eql(["Mars", "Jupiter"]);
    });
});