require("should");

const language = require("../../lib/utility/language.js");

describe("language", function()
{
    it("Should give a language code based on language string.", function()
    {
        let str = "fr-FR";
        let code = language(str);

        code.should.be.exactly("fr");
    });
});