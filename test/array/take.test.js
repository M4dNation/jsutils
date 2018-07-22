require("should");

const take = require("../../lib/array/take.js");

describe("take", function()
{
    it("Should get the first element.", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = take(arr);

        result.should.be.exactly("Earth");
    });

    it("Should get the two first elements", function()
    {
        let arr = ["Earth", "Mars", "Jupiter"];

        let result = take(arr, 2);

        result.should.eql(["Earth", "Mars"]);
    });
});