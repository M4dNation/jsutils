const intersection = require("../../lib/array/intersection");

describe("intersection", () => {
  test("Expect to get wanted elements.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = intersection(arr, ["Earth", "Jupiter"]);

    expect(result).toEqual(expect.arrayContaining(["Earth", "Jupiter"]));
  });
});
