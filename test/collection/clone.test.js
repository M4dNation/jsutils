require("should");

const clone = require("../../lib/collection/clone.js");

describe("clone", function()
{
    it("Should copy an object.", function()
    {
        let col = {0: "titi", 1: "toto"};
        let col2 = clone(col);

        col2.should.eql(col);
    });

    it("Should copy an array.", function()
    {
        let col = [0,1,2,3];
        let col2 = clone(col);

        col2.should.eql(col);
    });

    it("Should apply function to element after copy.", function()
    {
        let double = function(n)
        {
            return n * 2;
        };

        let col = [0,1,2,3];
        let col2 = clone(col, double);

        col2.should.eql([0,2,4,6]);
    });
});