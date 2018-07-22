require("should");

const remove = require("../../lib/array/remove.js");

describe("remove", function()
{
    it("Should remove a value from an array.", function()
    {
        let arr = [1,2,2,4];
        let expectedResult = [1,4];

        let result = remove(arr, 2);

        result.should.eql(expectedResult);
    });
});