require("should");

const groupsOf = require("../../lib/collection/groupsOf.js");

describe("groupsOf", function()
{
    it("Should be able to create group of two elements.", function()
    {
        let col = [0,1,2,3];
        let result = groupsOf(col, 2);
        let expectedResult = [[0,1], [2,3]];

        result.should.eql(expectedResult);
    });
});