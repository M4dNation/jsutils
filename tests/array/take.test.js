const take = require("../../lib/array/take");

describe("take", () => {
  test("Should get the first element.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = take(arr);

    expect(result).toEqual("Earth");
  });

  test("Should get the two first elements", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = take(arr, 2);

    expect(result).toEqual(expect.arrayContaining(["Earth", "Mars"]));
  });
});
