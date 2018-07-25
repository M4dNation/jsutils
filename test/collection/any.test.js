require("should");

const any = require("../../lib/collection/any.js");
const isNumber = require("../../lib/object/isNumber.js");

describe("any", function () 
{
    it("Should return true whenever an element passes a predicate.", function () 
    {
        let result = any(["titi", "toto", 0], isNumber);
        result.should.be.exactly(true);
    });

    it("Should return false when no elements passes a predicate.", function () 
    {
        let result = any(["titi", "toto", true], isNumber);
        result.should.be.exactly(false);
    });
});