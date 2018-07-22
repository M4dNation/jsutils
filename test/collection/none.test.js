require("should");

const none = require("../../lib/collection/none.js");
const isString = require("../../lib/object/isString.js");

describe("none", function()
{
    it("Should apply function to a collection.", function()
    {
        let col = [0,1,2];
        let result = none(col, isString);

        result.should.be.exactly(true);
    });
});