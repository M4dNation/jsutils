require("should");

const getByType = require("../../lib/collection/getByType.js");

describe("getByType", function()
{
    it("Should return all numbers in an array.", function()
    {
        let col = [0,1,"titi", 2];
        let result = getByType(col, "number");

        result.should.eql([0,1,2]);
    });

    it("Should return all numbers in an object.", function()
    {
        let col = {0:1,2:"titi"};
        let result = getByType(col, "number");

        result.should.eql([1]);
    });
});