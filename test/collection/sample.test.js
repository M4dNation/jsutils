require("should");

const sample = require("../../lib/collection/sample.js");

describe("sample", function()
{
    it("Should get default sample.", function()
    {
        let col = [0, 1, 2];

        sample(col).length.should.be.exactly(1);
    })

    it("Should get two elements sample.", function()
    {
        let col = [0, 1, 2];

        sample(col, 2).length.should.be.exactly(2);
    })

    it("Should get all elements sample.", function()
    {
        let col = [0, 1, 2];

        sample(col, col.length).length.should.be.exactly(3);
    })

    it("Should get elements sample with duplicate.", function()
    {
        let col = [0, 1, 2, 3, 4, 5, 6];

        sample(col, 6, true).length.should.be.exactly(6);
    })

    it("Should get elements sample with unflatten array.", function()
    {
        let col = [0, 1, 2, [3, 4, 5, 6]];

        sample(col, 2).length.should.be.exactly(2);
    })
});