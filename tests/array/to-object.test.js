const toObject = require("../../lib/array/to-object");

describe("toObject", () => {
  it("Should transform an array into an object.", () => {
    const array = [0, "Blue"];

    const result = toObject(array);
    const expectedResult = { 0: "Blue" };

    expect(result).toMatchObject(expectedResult);
  });

  it("Should transform two arrays into an object.", () => {
    const firstArray = [0, 1, 2];
    const secondArray = ["Blue", "Red", "Green"];
    const expectedResult = { 0: "Blue", 1: "Red", 2: "Green" };

    const result = toObject(firstArray, secondArray);

    expect(result).toMatchObject(expectedResult);
  });
});
