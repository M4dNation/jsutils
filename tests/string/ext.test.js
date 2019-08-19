require("should");

const ext = require("../../lib/string/ext.js");

describe("ext", function()
{
    it("Should get the extension of a .js file.", function()
    {
        let str = "test.js";
        let result = ext(str);

        let expectedResult = "js";

        result.should.eql(expectedResult);
    });

    it("Should get the extension of a .class.php file.", function()
    {
        let str = "test.class.php";
        let result = ext(str);

        let expectedResult = "php";

        result.should.eql(expectedResult);
    });
});