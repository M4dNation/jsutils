require("should");

const last = require("../../lib/array/last.js");

describe("last", function() {
  it("Should get the last element.", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = last(arr);

    result.should.be.exactly("Jupiter");
  });

  it("Should get the two first elements", function() {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = last(arr, 2);

    result.should.eql(["Mars", "Jupiter"]);
  });
});
