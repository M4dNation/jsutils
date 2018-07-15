require("should");

const all = require("../../lib/collection/all.js");
const isNumber = require("../../lib/object/isNumber.js");

describe("all", function () 
{
    it("Should apply function to a collection", function () 
    {
        all([0, 1, 2], isNumber).should.be.exactly(true);
    });
});