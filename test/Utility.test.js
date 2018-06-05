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
            let booleans = [0, 0, 1, 0, 1]
            let binaryValues = [1, 2, 4, 8, 16];

            let flag = Utility.flagEncode(booleans, binaryValues);

            assert.strictEqual(Obj.isNumber(flag), true);
            assert.strictEqual(Obj.isEqual(flag, 20), true);
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
            assert.strictEqual(Obj.isEqual(booleans, [4, 16]), true);
        });

    });

    describe("rgbToHex", function()
    {
        it("Should give an hexadecimal color.", function()
        {
            let red = 255;
            let green = 255;
            let blue = 255;

            let hex = Utility.rgbToHex(red, green, blue);

            assert.strictEqual("#FFFFFF", hex);
        })
    });

    describe("hexToRgb", function()
    {
        it("Should give an rgb object.", function()
        {
            let hex = "#FFFFFF";

            let blue = Utility.hexToRgb(hex).b;
            let green = Utility.hexToRgb(hex).g;
            let red = Utility.hexToRgb(hex).r;

            assert.strictEqual(blue, 255);
            assert.strictEqual(green, 255);
            assert.strictEqual(red, 255);
        });
    });

    describe("isHexColor", function()
    {
        it("Should find out if the number is an hex color.", function()
        {
            let color = 0x1258AE;
            let notColor = 0x1232123FFFFFF;

            assert.strictEqual(Utility.isHexColor(color), true);
            assert.strictEqual(Utility.isHexColor(notColor), false);
        });

        it("Should find out if the string is an hex color.", function()
        {
            let color = "#1258AE";
            let notColor = "#1232123FFFFFF";

            assert.strictEqual(Utility.isHexColor(color), true);
            assert.strictEqual(Utility.isHexColor(notColor), false);
        });
    });

    describe("isFQDN", function()
    {
        it("Should find out if the domain name is a valid FQDN.", function()
        {
            assert.strictEqual(Utility.isFQDN("www.google.com"), true);
            assert.strictEqual(Utility.isFQDN("mymail.somecollege.edu"), true);
            assert.strictEqual(Utility.isFQDN("mymail.somecollege.edu.t"), false);
            assert.strictEqual(Utility.isFQDN("mymail@test.fr"), false);
            assert.strictEqual(Utility.isFQDN("www.google.com/help?test=toto"), false);
        });
    });

    describe("isIp", function()
    {
        it("Should find out if the provided address is an ip.", function()
        {
            assert.strictEqual(Utility.isIp("192.168.0.1"), true);
            assert.strictEqual(Utility.isIp("2001:0db8:0000:85a3:0000:0000:ac1f:8001"), true);
            assert.strictEqual(Utility.isIp("2001:db8:0:85a3::ac1f:8001"), true);
            assert.strictEqual(Utility.isIp("localhost"), false);
            assert.strictEqual(Utility.isIp("9.12.18.7"), true);
            assert.strictEqual(Utility.isIp("9.12.18.7.13"), false);
            assert.strictEqual(Utility.isIp("9.12.18.7", 6), false);
            assert.strictEqual(Utility.isIp("2001:db8:0:85a3::ac1f:8001", 4), false);            
        });
    });

    describe("isUrl", function()
    {
        it("Should find out if the provided address is an URL.", function()
        {
            assert.strictEqual(Utility.isURL("http://www.google.com"), true);
            assert.strictEqual(Utility.isURL("test"), false);
            assert.strictEqual(Utility.isURL("https://www.facebook.com"), true);
            assert.strictEqual(Utility.isURL("https://192.168.0.1/test"), true);
            assert.strictEqual(Utility.isURL("ftp://chrome"), false);
        });
    });
});
