require("should");

const empty = require("../../lib/collection/empty.js");

describe("empty", function()
{
    it("Should empty an array.", function()
    {
        let col = [0,1,2,3];
        col = empty(col);

        col.should.eql([undefined, undefined, undefined, undefined]);
    });

    it("Should empty an object.", function()
    {
        let col = {"a": "test"};

        col = empty(col);

        col.should.eql({"a": undefined});
    });
});