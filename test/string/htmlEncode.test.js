require("should");

const htmlEncode = require("../../lib/string/htmlEncode.js");

describe("htmlEncode", function()
{
    it("Should encode an html element.", function()
    {
        let str = "<html></html>";
        let result = htmlEncode(str);

        let expectedResult = "&lt;html&gt;&lt;&#x2F;html&gt;";
        
        result.should.eql(expectedResult);
    });
});