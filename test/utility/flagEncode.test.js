require("should");

const flagEncode = require("../../lib/utility/flagEncode.js");

describe("flagEncode", function()
{
    it("Should give a flag based on specified arrays.", function()
    {
        let booleans = [0, 0, 1, 0, 1]
        let binaryValues = [1, 2, 4, 8, 16];

        let flag = flagEncode(booleans, binaryValues);

        flag.should.be.exactly(20);
    });
});