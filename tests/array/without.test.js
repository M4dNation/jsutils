const without = require("../../lib/array/without");

describe("without", () => {
  test("Expect to get the wanted elements.", () => {
    const arr = ["Red", "Green", "Yellow"];

    const result = without(arr, ["Red"]);
    const expectedResult = ["Green", "Yellow"];

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
