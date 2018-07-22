require("should");

const clear = require("../../lib/collection/clear.js");

describe("clear", function()
{
    it("Should clear an object.", function()
    {
        let col = {"titi" : "toto"};
        col = clear(col);

        col.should.eql({});
    });

    it("Should clear an array.", function()
    {
        let col = [0,1,2,3,4,5,6,7,8,9,10];
        col = clear(col);

        col.should.eql([]);
    });
});