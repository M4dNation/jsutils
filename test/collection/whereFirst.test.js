require("should");

const whereFirst = require("../../lib/collection/whereFirst.js");

describe("whereFirst", function()
{
    it("Should match an object.", function()
    {
        let col = [{id: 0, age: 22}, {id: 1, age: 29}, {id: 2, age: 29}];
        let expectedResult = {id: 1, age: 29};
        let result = whereFirst(col, {age: 29});

        result.should.eql(expectedResult);
    });
});