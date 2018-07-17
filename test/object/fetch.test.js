require("should");

const fetch = require("../../lib/object/fetch.js");

describe("fetch", function()
{
    it("Should fetch properties.", function()
    {
        let col = [{color: "red", hex: "#F00"}, {color: "blue", hex: "#00F"}, {color: "green", hex: "#0F0"}];
        let result = fetch(col, "color");

        let expectedResult = ["red", "blue", "green"];

        result.should.eql(expectedResult);
    });
});