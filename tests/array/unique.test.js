const unique = require("../../lib/array/unique");

describe("unique", () => {
  test("Expect to get only the unique elements.", () => {
    const arr = ["Red", "Green", "Red", "Yellow"];

    const result = unique(arr);
    const expectedResult = ["Red", "Green", "Yellow"];

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
