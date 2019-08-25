const union = require("../../lib/array/union");

describe("union", () => {
  test("Exoect to union two arrays in one.", () => {
    const firstArr = ["Red", "Green"];
    const secondArr = ["Blue", "Red"];

    const result = union(firstArr, secondArr);
    const expectedResult = ["Red", "Green", "Blue"];

    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
