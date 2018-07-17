require("should");

const isSameType = require("../../lib/object/isSameType.js");

describe("isSameType", function () 
{
    it("Should state if two parameters have the same type.", function () 
    {
        let result = isSameType(0, 25);

        result.should.be.exactly(true);
    });

    it("Should state if two parameters haven't the same type.", function () 
    {
        let result = isSameType(0, "25");

        result.should.be.exactly(false);
    });
});