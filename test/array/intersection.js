require("should");

const intersection = require("../../lib/array/intersection.js");

describe("intersection", function() {
  it("Should get wanted elements.", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = intersection(arr, ["Earth", "Jupiter"]);

    result.should.eql(["Earth", "Jupiter"]);
  });
});
