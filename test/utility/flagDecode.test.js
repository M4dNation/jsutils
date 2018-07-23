require("should");

const flagDecode = require("../../lib/utility/flagDecode.js");

describe("flagDecode", function()
{
    it("Should give an array based on specified flags.", function()
    {
        let flag = 20;
        let binaryValues = [1, 2, 4, 8, 16];

        let result = flagDecode(flag, binaryValues);

        result.should.eql([4, 16]);
    });

});