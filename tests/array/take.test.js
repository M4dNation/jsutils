const take = require("../../lib/array/take");

describe("take", () => {
  test("Expect to get the first element.", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = take(arr);

    expect(result).toEqual("Earth");
  });

  test("Expect to get the two first elements", () => {
    const arr = ["Earth", "Mars", "Jupiter"];

    const result = take(arr, 2);

    expect(result).toEqual(expect.arrayContaining(["Earth", "Mars"]));
  });
});
