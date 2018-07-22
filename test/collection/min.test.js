require("should");

const min = require("../../lib/collection/min.js");

describe("min", function()
{
    it("Should find the minimum value inside an array.", function()
    {
        let col = [17,10,56,12,23];
        let result = min(col);

        result.should.be.exactly(10);
    });

    it("Should find the minimum value inside an object.", function()
    {
        let col = {one: 19, two: 17, three: 56, four: 23};
        let result = min(col);

        result.should.be.exactly(17);
    });
});