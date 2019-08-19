require("should");

const toObject = require("../../lib/array/toObject.js");

describe("toObject", function()
{
    it("Should transform an array into an object.", function()
    {
        let array = [0, "Blue"];

        let result = toObject(array);
        let expectedResult = {0: "Blue"};

        result.should.eql(expectedResult);
    });

    it("Should transform two arrays into an object.", function()
    {
        let firstArray = [0,1,2];
        let secondArray = ["Blue", "Red", "Green"];
        let expectedResult = {0: "Blue", 1: "Red", 2: "Green"};

        let result = toObject(firstArray, secondArray);

        result.should.eql(expectedResult);
    });
});