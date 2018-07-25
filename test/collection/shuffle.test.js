require("should");

const shuffle = require("../../lib/collection/shuffle.js");

describe("shuffle", function()
{
    it("Should get shuffle collection.", function()
    {
        let col = [0, 1, 2];

        shuffle(col).length.should.be.exactly(col.length);
    });
});