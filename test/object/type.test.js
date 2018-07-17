require("should");

const type = require("../../lib/object/type.js");

describe("type", function () 
{
    it("Should retrieve the right type.", function () 
    {
        let value = function () { return arguments; };

        let result = type(value());

        result.should.be.exactly("arguments");
    });
});