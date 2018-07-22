require("should");

const compact = require("../../lib/collection/compact.js");

describe("compact", function()
{
    it("Should compact an object.", function()
    {
        let col = {0: "titi", 1: "toto", 2: false};
        col = compact(col);

        col.should.eql(["titi", "toto"]);
    });

    it("Should copy an array.", function()
    {
        let col = [0,1,2,3];
        col = compact(col);

        col.should.eql([1,2,3]);
    });
});