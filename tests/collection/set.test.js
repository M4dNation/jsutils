require("should");

const set = require("../../lib/collection/set");

describe("set", () => {
  it("Should add a value to a collection.", () => {
    let col = [];
    col = set(col, 0, "test");

    col.should.eql(["test"]);
  });

  it("Should set a value to a collection.", () => {
    let col = [1];
    col = set(col, 0, "test");

    col.should.eql(["test"]);
  });

  it("Should create missing property as array", () => {
    let col = [];
    col = set(col, "1.0", "test");

    col.length.should.eql(2);
    col.indexOf(undefined).should.eql(-1);
    col[1].should.eql(["test"]);
  });

  it("Should create missing property as object", () => {
    let col = {};
    col = set(col, "a.b", 3);
    col.should.eql({a: {b: 3}});
  });
});
