require("should");

const isFQDN = require("../../lib/utility/isFQDN.js");

describe("isFQDN", function()
{
    it("Should find out if the domain name is a valid FQDN.", function()
    {
       isFQDN("www.google.com").should.be.exactly(true);
       isFQDN("mymail.somecollege.edu").should.be.exactly(true);
       isFQDN("mymail.somecollege.edu.t").should.be.exactly(false);
       isFQDN("mymail@test.fr").should.be.exactly(false);
       isFQDN("www.google.com/help?test=toto").should.be.exactly(false);
    });
});