require("should");

const compose = require("../../lib/func/compose.js");

describe("compose", function()
{
    it("Should compose two functions.", function()
    {
        let fn1 = function(v) { return v + " is dead";};
        let fn2 = function(v) { return v + " and alive!"; };

        let composedFunction = compose(fn2, fn1);

        let result = composedFunction("An undead");
        result.should.be.exactly("An undead is dead and alive!");
    });
});