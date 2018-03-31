var assert = require("assert");
const Obj = require("../jstoolbox.js").Obj;
const Utility = require("../jstoolbox.js").Utility;

describe("Utility Methods", function()
{

    describe("identity", function()
    {
        it("Should return the exact same variable.", function()
        {
            let result = Utility.identity(1);

            assert.strictEqual(result, 1);
        });

        it("Should return the exact same function.", function()
        {
            let result = Utility.identity(function(){return "titi"});

            assert.strictEqual(Obj.isFunction(result), true);

            let val = result();

            assert.strictEqual(Obj.isString(val), true);
            assert.strictEqual(Obj.isEqual(val, "titi"), true);
        });
    });

    describe("value", function()
    {
        it("Should return a variable value.", function()
        {
            let result = Utility.value(0);

            assert.strictEqual(result, 0);
        });

        it("Should execute a function and return its return value.", function()
        {
            let result = Utility.value(function(){return "test";});

            assert.strictEqual(Obj.isString(result), true);

            assert.strictEqual(Obj.isEqual(result, "test"), true);
        });
    });

    describe("language", function()
    {
        it("Should give a language code based on language string.", function()
        {
            let str = "fr-FR";
            let code = Utility.language(str);

            assert.strictEqual(Obj.isString(code), true);

            assert.strictEqual(Obj.isEqual(code, "fr"), true);
        });
    });

    describe("flagEncode", function()
    {
        it("Should give a flag based on specified arrays.", function()
        {
            let booleans = [0, 0, 1, 0, ,1]
            let binaryValues = [1, 2, 4, 8, 16];

            let flag = Utility.flagEncode(booleans, binaryValues);

            assert.strictEqual(Obj.isNumber(flag), true);
            assert.strictEqual(Obj.isEqual(flag, 20));
        });
    });

    describe("flagDecode", function()
    {
        it("Should give an array based on specified flags.", function()
        {
            let flag = 20;
            let binaryValues = [1, 2, 4, 8, 16];

            let booleans = Utility.flagDecode(flag, binaryValues);

            assert.strictEqual(Obj.isArray(booleans), true);
            assert.strictEqual(Obj.isEqual(booleans, [4, 16]));
        });

    });
});
