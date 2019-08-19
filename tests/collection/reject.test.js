require("should");

const reject = require("../../lib/collection/reject.js");
const isString = require("../../lib/object/isString.js");

describe("reject", function()
{
    it("Should reject some values in an array.", function()
    {
        let col = ["Red", "Green", "Blue", 1];
        let result = reject(col, isString);

        result.should.eql([1]);
    });
});