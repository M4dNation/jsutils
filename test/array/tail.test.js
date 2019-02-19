require("should");

const tail = require("../../lib/array/tail.js");

describe("tail", function() {
  it("Should get all elements but the first.", function() {
    let arr = ["Magnolia", "Rose", "Lilly"];
    let expectedResult = ["Rose", "Lilly"];

    let result = tail(arr);

    result.should.eql(expectedResult);
  });

  it("Should get all elements but the two first one.", function() {
    let arr = ["Magnolia", "Rose", "Lilly"];
    let expectedResult = ["Lilly"];

    let result = tail(arr, 2);

    result.should.eql(expectedResult);
  });
});
