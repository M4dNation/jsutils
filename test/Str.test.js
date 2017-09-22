var assert = require("assert");
const Obj = require("../jstoolbox.js").Obj;
const Str = require("../jstoolbox.js").Str;

describe("String Methods", function()
{
    describe("fromQueryString", function()
    {
        it("Should decode a query string.", function()
        {
            let str = "firstname%3DJohn%26middlename%3DEdgar%26lastname%3DHoover";
            let result = Str.fromQueryString(str);

            let expectedResult =
            {
                firstname: "John",
                middlename: "Edgar",
                lastname: "Hoover"
            };

            assert.strictEqual(Obj.isObject(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("htmlEncode", function()
    {
        it("Should encode an html element.", function()
        {
            let str = "<html></html>";
            let result = Str.htmlEncode(str);

            let expectedResult = "&lt;html&gt;&lt;&#x2F;html&gt;";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("htmlEncode", function()
    {
        it("Should decode an html entity.", function()
        {
            let str = "&lt;html&gt;&lt;&#x2F;html&gt;";
            let result = Str.htmlDecode(str);

            let expectedResult = "<html></html>";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("ext", function()
    {
        it("Should get the extension of a .js file.", function()
        {
            let str = "test.js";
            let result = Str.ext(str);

            let expectedResult = "js";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should get the extension of a .class.php file.", function()
        {
            let str = "test.class.php";
            let result = Str.ext(str);

            let expectedResult = "php";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("toCamelCase", function()
    {
        it("Should camelCase a string.", function()
        {
            let str = "test valeur";
            let result = Str.toCamelCase(str);

            let expectedResult = "testValeur";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });

        it("Should not camelCase a snake_case string.", function()
        {
            let str = "test_valeur";
            let result = Str.toCamelCase(str);

            let expectedResult = "test_valeur";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });

    describe("capitalize", function()
    {
        it("Should capitalize a string.", function()
        {
            let str = "test valeur";
            let result = Str.capitalize(str);

            let expectedResult = "Test valeur";

            assert.strictEqual(Obj.isString(result), true);
            assert.strictEqual(Obj.isEqual(result, expectedResult), true);
        });
    });
});
