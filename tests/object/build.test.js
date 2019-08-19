require("should");

const build = require("../../lib/object/build.js");

describe("build", function () 
{
    it("Should transform a namespace into an object.", function () 
    {
        let result = build("a.b.c");
        let expectedResult = { a: { b: { c: {} } } };

        result.should.eql(expectedResult);
    });
});