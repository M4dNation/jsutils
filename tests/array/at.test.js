const at = require("../../lib/array/at");

describe("at", () => {
  test("Expect to get wanted elements.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = at(arr, 1);

    expect(result).toEqual(expect.arrayContaining(["Mars"]));
  });
});
