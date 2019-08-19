require("should");

const count = require("../../lib/collection/count.js");
const isNumber = require("../../lib/object/isNumber.js");

describe("count", function()
{
    it("Should count how many number there is in an array.", function()
    {
        let col = [0,1,2,3, "titi"];

        count(col, isNumber).should.be.exactly(4);
    });

    it("Should count how many number there is in an object.", function()
    {
        let col = {"titi" : "toto", "value": 2 };

        count(col, isNumber).should.be.exactly(1);
    });
});