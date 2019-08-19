require("should");

const all = require("../../lib/collection/all.js");
const isNumber = require("../../lib/object/isNumber.js");

describe("all", function () 
{
    it("Should return true when all element passes a predicate.", function () 
    {
        all([0, 1, 2], isNumber).should.be.exactly(true);
    });

    it("Should return false when one element doesn't pass a predicate.", function () 
    {
        all([0, 1, "titi"], isNumber).should.be.exactly(false);
    });
});