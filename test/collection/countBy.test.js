require("should");

const identity = require("../../lib/utility/identity.js");
const countBy = require("../../lib/collection/countBy.js");

describe("countBy", function()
{
    it("Should count how many group there is in a collection.", function()
    {
        let col = {0: "Red", 1: "Red", 2: "Blue"};

        let result = countBy(col, identity);
        result.should.eql({Red: 2, Blue: 1});
    });
});