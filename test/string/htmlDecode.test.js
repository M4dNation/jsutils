require("should");

const htmlDecode = require("../../lib/string/htmlDecode.js");

describe("htmlDecode", function()
{
    it("Should decode an html entity.", function()
    {
        let str = "&lt;html&gt;&lt;&#x2F;html&gt;";
        let result = htmlDecode(str);

        let expectedResult = "<html></html>";

        result.should.eql(expectedResult);
    });
});