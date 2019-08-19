require("should");

const at = require("../../lib/array/at.js");

describe("at", function() {
  it("Should get wanted elements.", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = at(arr, 1);

    result.should.eql(["Mars"]);
  });
});
