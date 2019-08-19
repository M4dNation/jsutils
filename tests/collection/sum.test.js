require("should");

const sum = require("../../lib/collection/sum.js");

describe("sum", function()
{
    it("Should sum all numbers inside a collection.", function()
    {
        let col = [1,2,3,4, "test"];

        sum(col).should.be.exactly(10);
    });
});