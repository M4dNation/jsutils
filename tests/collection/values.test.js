require("should");

const values = require("../../lib/collection/values.js");

describe("values", function()
{
    it("Should return the values of an object.", function()
    {
        let col = {one: "test", two: "titi"};
        let result = values(col);

        result.should.eql(["test", "titi"]);
    });
});