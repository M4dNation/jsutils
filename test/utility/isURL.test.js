require("should");

const isURL = require("../../lib/utility/isURL.js");

describe("isUrl", function()
{
    it("Should find out if the provided address is an URL.", function()
    {
        isURL("http://www.google.com").should.be.exactly(true);
        isURL("test").should.be.exactly(false);
        isURL("https://www.facebook.com").should.be.exactly(true);
        isURL("https://192.168.0.1/test").should.be.exactly(true);
        isURL("ftp://chrome").should.be.exactly(false);
    });
});