require("should");

const flatten = require("../../lib/collection/flatten.js");

describe("flatten", function()
{
    it("Should flatten a specified array.", function()
    {
        let col = [1, [2]];
        col = flatten(col);

        col.should.eql([1,2]);
    });

    it("Should flatten a specified object.", function()
    {
        let col = {0:1, 1: {1:2}};
        col = flatten(col);

        col.should.eql([1,2]);
    });
});