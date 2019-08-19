require("should");

const len = require("../../lib/collection/len.js");

describe("len", function()
{
    it("Should count the number of element inside an array.", function()
    {
        let col = [0,1,2];
        let result = len(col);

        result.should.be.exactly(3);
    });

    it("Should count the number of element inside an object.", function()
    {
        let col = {"titi": "toto"};
        let result = len(col);

        result.should.be.exactly(1);
    });
});