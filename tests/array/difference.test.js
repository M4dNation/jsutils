require("should");

const difference = require("../../lib/array/difference.js");

describe("difference", function() {
  it("Should get wanted elements.", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = difference(arr, ["Earth", "Jupiter"]);

    result.should.eql(["Mars"]);
  });
});
