require("should");

const max = require("../../lib/collection/max.js");

describe("max", function()
{
    it("Should find the maximum value inside an array.", function()
    {
        let col = [17,10,56,12,23];
        let result = max(col);

        result.should.be.exactly(56);
    });

    it("Should find the maximum value inside an object.", function()
    {
        let col = {one: 10, two: 17, three: 56, four: 23};
        let result = max(col);

        result.should.be.exactly(56);
    });
});